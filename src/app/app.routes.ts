import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: PagesComponent }, // Rota para a página inicial
  { path: 'about', component: AboutComponent } // Rota para a página "Sobre"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }