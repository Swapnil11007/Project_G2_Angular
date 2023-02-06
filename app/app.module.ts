import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { NgxOtpInputModule } from 'ngx-otp-input';
import { HomepageComponent } from './homepage/homepage.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PackageHSComponent } from './package-hs/package-hs.component';

import { TripsComponent } from './trips/trips.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    PackageHSComponent,
    TripsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxOtpInputModule,
    NgImageSliderModule,
    HttpClientModule,
    BrowserAnimationsModule
    //ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
