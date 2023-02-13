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
import { PackageWComponent } from './package-w/package-w.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { TripsComponent } from './trips/trips.component';
import { PackageJSComponent } from './package-js/package-js.component';
import { TicketplaceholderComponent } from './ticketplaceholder/ticketplaceholder.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:"login", component:LoginComponent},
  {path:"logout",canActivate:[AuthGuard], component:LogoutComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"PackageHS",component:PackageHSComponent},
  {path:"desert",component:DesertComponent},
  {path:"safari",component:PackageJSComponent},
  {path:"beach",component:BeachComponent},
  {path:"snow",component:SnowsitesComponent},
  {path:"adventure",component:AdventureComponent},
  {path:"piligrimage",component:PiligrimageComponent},
  {path:"PackageW",component:PackageWComponent},
  {path:"Honeymoon",component:HoneymoonComponent},
  {path:"trips",component:TripsComponent},
  {path:"ticketplacer",component:TicketplaceholderComponent},
  {path:"Bookings",component:BookingComponent}

];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
