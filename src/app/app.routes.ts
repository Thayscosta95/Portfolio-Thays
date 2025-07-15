import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app.component',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  }
];
