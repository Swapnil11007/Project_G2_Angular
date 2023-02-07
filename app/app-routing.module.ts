import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureComponent } from './adventure/adventure.component';
import { BeachComponent } from './beach/beach.component';
import { DesertComponent } from './desert/desert.component';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HoneymoonComponent } from './honeymoon/honeymoon.component';
import { LoginComponent } from './login/login.component';
import { PackageHSComponent } from './package-hs/package-hs.component';


import { PiligrimageComponent } from './piligrimage/piligrimage.component';
import { SnowsitesComponent } from './snowsites/snowsites.component';

import { PackageJSComponent } from './package-js/package-js.component';
import { PackageWComponent } from './package-w/package-w.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:HomepageComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"PackageHS",component:PackageHSComponent},

  {path:"desert",component:DesertComponent},
  {path:"beach",component:BeachComponent},
  {path:"snow",component:SnowsitesComponent},
  {path:"adventure",component:AdventureComponent},
  {path:"piligrimage",component:PiligrimageComponent},
  {path:"Honeymoon",component:HoneymoonComponent},
  {path:"PackageW",component:PackageWComponent},
  {path:"JungleSafari",component:PackageJSComponent}
  



];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
