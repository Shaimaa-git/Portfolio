import { Injectable, computed, effect, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>(this.initial());
  readonly isLight = computed(() => this.mode() === 'light');

  constructor() {
    this.apply(this.mode());
    effect(() => this.apply(this.mode()));
  }

  toggle() {
    this.mode.update(mode => mode === 'dark' ? 'light' : 'dark');
  }

  private apply(mode: ThemeMode) {
    document.documentElement.dataset['theme'] = mode;
    try { localStorage.setItem('portfolio-theme', mode); } catch { /* ignore private mode */ }
  }

  private initial(): ThemeMode {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  }
}
