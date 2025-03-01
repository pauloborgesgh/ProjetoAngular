import { Routes } from '@angular/router';

import { DownloadsComponent } from './downloads/downloads.component';
import { ArquivosScriptComponent } from './arquivos-script/arquivos-script.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'downloads',component:DownloadsComponent},
  {path:'script',component:ArquivosScriptComponent},
  {path:'about',component:AboutComponent},



];
