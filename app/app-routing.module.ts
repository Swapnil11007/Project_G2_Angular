import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PackageHSComponent } from './package-hs/package-hs.component';
import { PackageJSComponent } from './package-js/package-js.component';
import { PackageWComponent } from './package-w/package-w.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomepageComponent},
  {path:"",component:HomepageComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"PackageHS",component:PackageHSComponent},
  {path:"PackageW",component:PackageWComponent},
  {path:"JungleSafari",component:PackageJSComponent}
  


];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
