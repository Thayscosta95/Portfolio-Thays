import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { ConversorMoedasComponent } from './componentes/projetos/ver-projetos/conversor-moedas/conversor-moedas.component';
import { JokenpoComponent } from './componentes/projetos/ver-projetos/jokenpo/jokenpo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  },
  {
    path: 'ver-projetos/conversor-moedas',
    component: ConversorMoedasComponent
  },
  {
    path: 'ver-projetos/jokenpo',
    component: JokenpoComponent
  }
];
