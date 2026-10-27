import { Routes } from '@angular/router';
export const routes:Routes=[{path:'',loadComponent:()=>import('./pages/home.component').then(m=>m.HomeComponent)},{path:'projects/:slug',loadComponent:()=>import('./pages/project.component').then(m=>m.ProjectComponent)},{path:'**',redirectTo:''}];
