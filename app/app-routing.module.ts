import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PackageHSComponent } from './package-hs/package-hs.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomepageComponent},
  {path:"",component:HomepageComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"PackageHS",component:PackageHSComponent}
  


];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
