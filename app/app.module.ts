import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { NgxOtpInputModule } from 'ngx-otp-input';
import { HomepageComponent } from './homepage/homepage.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PackageHSComponent } from './package-hs/package-hs.component';

import { TripsComponent } from './trips/trips.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    ForgotPasswordComponent,
    PackageHSComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxOtpInputModule,
    NgImageSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
