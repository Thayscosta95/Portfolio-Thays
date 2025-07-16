import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { ContatoComponent } from './componentes/contato/contato.component';

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
  },
  {
    path: 'sobre',
    component: SobreMimComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];
