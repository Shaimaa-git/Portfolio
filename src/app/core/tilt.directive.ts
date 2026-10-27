import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({ selector: '[appTilt]', standalone: true })
export class TiltDirective {
  readonly tilt = input(12);
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('pointermove', ['$event'])
  move(event: PointerEvent) {
    if (this.reduced || window.innerWidth < 700) return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    const max = this.tilt();
    const style = this.el.nativeElement.style;
    style.setProperty('--ry', (((px - 50) / 50) * max).toFixed(2) + 'deg');
    style.setProperty('--rx', (((50 - py) / 50) * max * 0.65).toFixed(2) + 'deg');
    style.setProperty('--px', px.toFixed(1) + '%');
    style.setProperty('--py', py.toFixed(1) + '%');
  }

  @HostListener('pointerleave')
  leave() {
    const style = this.el.nativeElement.style;
    style.removeProperty('--rx');
    style.removeProperty('--ry');
    style.removeProperty('--px');
    style.removeProperty('--py');
  }
}
