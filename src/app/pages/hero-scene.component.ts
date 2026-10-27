import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { ThemeService } from '../core/theme.service';
// three's package exports omit its type entry, so the compiler cannot see @types/three.
// @ts-ignore
import * as THREE from 'three';

@Component({
  selector: 'app-hero-scene',
  standalone: true,
  template: `<canvas #view aria-hidden="true"></canvas>`,
  styles: [`
    :host { display: block; position: absolute; inset: 0; z-index: 0; }
    canvas { width: 100%; height: 100%; display: block; }
  `]
})
export class HeroSceneComponent implements AfterViewInit, OnDestroy {
  private readonly theme = inject(ThemeService);
  @ViewChild('view', { static: true }) private view!: ElementRef<HTMLCanvasElement>;
  private stop = () => {};
  private readonly pointer = { x: 0, y: 0 };
  private readonly onMove = (event: PointerEvent) => {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  ngAfterViewInit() {
    const canvas = this.view.nativeElement;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x07040f, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const fog = new THREE.FogExp2(0x07040f, 0.065);
    scene.fog = fog;
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(0, 1.15, 7.4);

    scene.add(new THREE.AmbientLight(0x3b0764, 0.7));
    const key = new THREE.DirectionalLight(0xe879f9, 2.4);
    key.position.set(3.2, 2.4, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x7c3aed, 1.6);
    fill.position.set(-4, 0.4, 2);
    scene.add(fill);
    const rim = new THREE.PointLight(0xc4b5fd, 22, 14);
    rim.position.set(-1.2, 2.2, -2);
    scene.add(rim);

    const figure = this.buildSecurityScene();
    scene.add(figure);

    const resize = () => {
      const host = canvas.parentElement ?? canvas;
      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement ?? canvas);
    window.addEventListener('pointermove', this.onMove);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let frame = 0;
    const loop = () => {
      frame = requestAnimationFrame(loop);
      const time = clock.getElapsedTime();
      if (!reduced) {
        figure.position.y = 1.62 + Math.sin(time * 0.8) * 0.1;
        figure.rotation.y = THREE.MathUtils.lerp(figure.rotation.y, this.pointer.x * 0.45, 0.06);
        figure.rotation.x = THREE.MathUtils.lerp(figure.rotation.x, -this.pointer.y * 0.18, 0.06);
        figure.userData['orbit'].rotation.y = time * 0.45;
        figure.userData['ring'].rotation.z = time * 0.25;
      }
      const backdrop = this.theme.isLight() ? 0xf4ecff : 0x07040f;
      renderer.setClearColor(backdrop, 1);
      fog.color.set(backdrop);
      renderer.render(scene, camera);
    };
    loop();

    this.stop = () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', this.onMove);
      observer.disconnect();
      scene.traverse((object: THREE.Object3D) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
        const material = mesh.material;
        if (Array.isArray(material)) material.forEach(item => item.dispose());
        else material?.dispose();
      });
      renderer.dispose();
    };
  }

  ngOnDestroy() {
    this.stop();
  }

  private metal(color: number, roughness = 0.32) {
    return new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.35 });
  }

  private buildSecurityScene() {
    const group = new THREE.Group();
    const shieldShape = new THREE.Shape();
    shieldShape.moveTo(0, 1.15);
    shieldShape.lineTo(0.95, 0.72);
    shieldShape.lineTo(0.95, -0.1);
    shieldShape.quadraticCurveTo(0.95, -1.05, 0, -1.4);
    shieldShape.quadraticCurveTo(-0.95, -1.05, -0.95, -0.1);
    shieldShape.lineTo(-0.95, 0.72);
    shieldShape.closePath();
    const shield = new THREE.Mesh(
      new THREE.ExtrudeGeometry(shieldShape, { depth: 0.16, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2 }),
      this.metal(0x6d28d9, 0.28)
    );
    shield.geometry.center();
    group.add(shield);

    const lockBody = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.42, 0.18), this.metal(0x3b1764, 0.3));
    lockBody.position.set(0, -0.18, 0.22);
    const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.045, 16, 32, Math.PI), this.metal(0xf5e9ff, 0.15));
    shackle.position.set(0, 0.08, 0.22);
    const keyhole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.06, 16), this.metal(0x07040f, 0.5));
    keyhole.rotation.x = Math.PI / 2;
    keyhole.position.set(0, -0.16, 0.32);
    group.add(lockBody, shackle, keyhole);

    const terminal = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.86, 0.07), this.metal(0x241433, 0.45));
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 0.72),
      new THREE.MeshBasicMaterial({ map: this.codeTexture() })
    );
    screen.position.z = 0.04;
    terminal.add(shell, screen);
    terminal.position.set(1.7, 0.05, 0.15);
    terminal.rotation.set(0.08, -0.62, 0.04);
    group.add(terminal);

    const key = this.buildKey();
    key.position.set(-1.65, 0.15, 0.2);
    key.rotation.set(0.2, 0.7, 0.4);
    group.add(key);

    const orbit = new THREE.Group();
    ['{ }', '</>', 'SQL', 'JWT'].forEach((label, index) => {
      const chip = this.chip(label);
      const angle = (index / 4) * Math.PI * 2;
      chip.position.set(Math.cos(angle) * 2.15, Math.sin(angle) * 1.15, Math.sin(angle) * 0.35);
      chip.lookAt(0, 0, 1.5);
      orbit.add(chip);
    });
    group.add(orbit);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.95, 0.018, 12, 80),
      this.metal(0xe879f9, 0.2)
    );
    ring.rotation.x = 1.15;
    group.add(ring);

    group.userData['orbit'] = orbit;
    group.userData['ring'] = ring;
    group.position.y = 1.62;
    group.scale.setScalar(0.92);
    return group;
  }

  private buildKey() {
    const key = new THREE.Group();
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.045, 12, 24), this.metal(0xe9d5ff, 0.2));
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.07, 0.07), this.metal(0xe9d5ff, 0.2));
    shaft.position.x = 0.38;
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.06), this.metal(0xe9d5ff, 0.2));
    tooth.position.set(0.52, -0.1, 0);
    key.add(bow, shaft, tooth);
    return key;
  }

  private chip(label: string) {
    const group = new THREE.Group();
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.34, 0.06), this.metal(0x3b1764, 0.4));
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(0.64, 0.26),
      new THREE.MeshBasicMaterial({ map: this.chipTexture(label) })
    );
    face.position.z = 0.034;
    group.add(plate, face);
    return group;
  }

  private chipTexture(label: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const context = canvas.getContext('2d')!;
    context.fillStyle = '#2a1248';
    context.fillRect(0, 0, 256, 128);
    context.fillStyle = '#f5e9ff';
    context.font = '700 64px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(label, 128, 68);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  private codeTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const context = canvas.getContext('2d')!;
    context.fillStyle = '#120818';
    context.fillRect(0, 0, 512, 320);
    const lines = ['const access = true;', 'if (token.jwt) {', '  shield.unlock();', '}', '// secure by design'];
    lines.forEach((line, index) => {
      context.fillStyle = index === 4 ? '#c4b5fd' : index === 1 ? '#e879f9' : '#f3e8ff';
      context.font = '500 36px monospace';
      context.fillText(line, 28, 58 + index * 52);
    });
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }
}
