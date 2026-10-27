import { Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { CERTIFICATES, EDUCATION, PROJECTS, ROLES, SKILL_GROUPS } from '../core/content';
import { TiltDirective } from '../core/tilt.directive';
import { HeroSceneComponent } from './hero-scene.component';

@Component({ standalone: true, imports: [TiltDirective, HeroSceneComponent], templateUrl: './home.component.html', styleUrl: './home.component.scss' })
export class HomeComponent {
  readonly l = inject(LanguageService);
  readonly projects = PROJECTS;
  readonly roles = ROLES;
  readonly education = EDUCATION;
  readonly certificates = CERTIFICATES;
  readonly skillGroups = SKILL_GROUPS;
  readonly ticker = ['DNS', 'LEGAL', 'CMS', 'VSM', 'ML', 'DNS', 'LEGAL', 'CMS', 'VSM', 'ML'];
  readonly contactEmail = 'shaimaasaidmo@gmail.com';
  readonly contactPhone = '91767067';
  readonly linkedInUrl = 'https://www.linkedin.com/in/shaima-al-maqbali-685367280';
}
