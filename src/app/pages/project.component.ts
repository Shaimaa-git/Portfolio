import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PROJECTS } from '../core/content';
import { LanguageService } from '../core/language.service';
import { TiltDirective } from '../core/tilt.directive';
@Component({standalone:true,imports:[RouterLink,TiltDirective],templateUrl:'./project.component.html',styleUrl:'./project.component.scss'})
export class ProjectComponent{readonly l=inject(LanguageService);private readonly route=inject(ActivatedRoute);private readonly slug=toSignal(this.route.paramMap.pipe(map(p=>p.get('slug'))));readonly project=computed(()=>PROJECTS.find(p=>p.slug===this.slug()));}
