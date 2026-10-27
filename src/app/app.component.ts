import { Component, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LanguageService } from './core/language.service';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
<div class="site-shell">
  <header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a routerLink="/" class="brand" aria-label="Shaimaa Al Maqbali home"><span class="brand-icon">&lt;/&gt;</span><span>SHAIMAA<span class="brand-dot">.</span></span></a>
      <div class="nav-links">
        <a routerLink="/" fragment="home">{{l.t('home')}}</a>
        <a routerLink="/" fragment="about">{{l.t('about')}}</a>
        <a routerLink="/" fragment="experience">{{l.t('experience')}}</a>
        <a routerLink="/" fragment="projects">{{l.t('projects')}}</a>
        <a routerLink="/" fragment="skills">{{l.t('skills')}}</a>
        <a routerLink="/" fragment="contact">{{l.t('contact')}}</a>
      </div>
      <div class="nav-tools">
        <button type="button" class="lang-btn" (click)="theme.toggle()" [attr.aria-label]="theme.isLight() ? (l.isArabic() ? 'التبديل إلى الوضع الداكن' : 'Switch to dark mode') : (l.isArabic() ? 'التبديل إلى الوضع الفاتح' : 'Switch to light mode')" [attr.title]="theme.isLight() ? (l.isArabic() ? 'الوضع الداكن' : 'Dark mode') : (l.isArabic() ? 'الوضع الفاتح' : 'Light mode')">
          @if (theme.isLight()) {
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
          } @else {
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3.2A8.2 8.2 0 1 0 20.8 14 6.4 6.4 0 0 1 16 3.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
          }
        </button>
        <button type="button" class="lang-btn" (click)="l.toggle()" [attr.aria-label]="l.isArabic() ? 'Switch to English' : 'التبديل إلى العربية'" [attr.title]="l.isArabic() ? 'English' : 'العربية'"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9s1.2-6.4 3.6-9z" fill="none" stroke="currentColor" stroke-width="1.7"/></svg></button>
      </div>
    </nav>
  </header>
  <main><router-outlet/></main>
  <footer class="footer">
    <div class="container footer-inner"><span>© {{year}} Shaimaa Al Maqbali</span><span>{{l.t('footer')}}</span></div>
  </footer>
</div>`
})
export class AppComponent implements OnDestroy {
  readonly l = inject(LanguageService);
  readonly theme = inject(ThemeService);
  readonly year = new Date().getFullYear();
  private readonly router = inject(Router);
  private readonly onCapture = (event: MouseEvent) => this.captureClick(event);
  private frame = 0;
  private rippleTimer = 0;
  private readonly sub: Subscription;

  constructor() {
    document.addEventListener('click', this.onCapture, true);
    this.sub = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const id = this.router.parseUrl(this.router.url).fragment;
      if (id) this.queueDrop(id);
    });
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onCapture, true);
    this.sub.unsubscribe();
    cancelAnimationFrame(this.frame);
    window.clearTimeout(this.rippleTimer);
  }

  private captureClick(event: MouseEvent) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element | null)?.closest('a');
    if (!link) return;
    const id = this.sectionId(link);
    if (!id || !document.getElementById(id)) return;
    event.preventDefault();
    event.stopPropagation();
    const url = `${location.pathname}#${id}`;
    history.replaceState(null, '', url);
    this.dropTo(id, event.clientX, event.clientY);
  }

  private sectionId(link: Element) {
    const href = link.getAttribute('href') ?? '';
    const hash = href.split('#')[1];
    return hash ? decodeURIComponent(hash) : null;
  }

  private queueDrop(id: string, attempt = 0) {
    if (document.getElementById(id)) {
      this.dropTo(id);
      return;
    }
    if (attempt < 24) window.setTimeout(() => this.queueDrop(id, attempt + 1), 50);
  }

  private dropTo(id: string, originX = window.innerWidth / 2, originY = 48) {
    const target = document.getElementById(id);
    if (!target) return;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 90);
    if (originX < 8) originX = window.innerWidth / 2;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || Math.abs(top - window.scrollY) < 4) {
      window.scrollTo({ top, behavior: 'auto' });
      if (!reduced) this.spawnRipple();
      return;
    }
    const start = window.scrollY;
    const distance = top - start;
    const duration = Math.min(1500, Math.max(860, Math.abs(distance) * 0.45));
    const started = performance.now();
    cancelAnimationFrame(this.frame);
    window.clearTimeout(this.rippleTimer);
    this.spawnDrop(originX, originY, duration * 0.78);
    this.rippleTimer = window.setTimeout(() => this.spawnRipple(), duration * 0.72);
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      window.scrollTo({ top: start + distance * this.waterEase(t) + this.surface(t) * Math.sign(distance || 1), behavior: 'auto' });
      if (t < 1) this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }

  private waterEase(t: number) {
    const impact = 0.74;
    if (t < impact) return (t / impact) ** 2;
    return 1;
  }

  private surface(t: number) {
    const impact = 0.74;
    if (t < impact) return 0;
    const settle = (t - impact) / (1 - impact);
    return Math.sin(settle * Math.PI * 2) * Math.exp(-3.1 * settle) * 46;
  }

  private spawnDrop(x: number, y: number, fall: number) {
    const drop = document.createElement('span');
    drop.className = 'lake-drop';
    drop.style.setProperty('--x', `${x}px`);
    drop.style.setProperty('--from', `${y}px`);
    drop.style.setProperty('--fall', `${fall}ms`);
    document.body.appendChild(drop);
    window.setTimeout(() => drop.remove(), fall + 80);
  }

  private spawnRipple() {
    const lake = document.createElement('div');
    lake.className = 'lake-hit';
    lake.innerHTML = '<span></span><span></span><span></span><span></span><i></i>';
    document.body.appendChild(lake);
    window.setTimeout(() => lake.remove(), 2500);
  }
}
