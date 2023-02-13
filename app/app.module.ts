import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { NgxOtpInputModule } from 'ngx-otp-input';
import { HomepageComponent } from './homepage/homepage.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PackageHSComponent } from './package-hs/package-hs.component';
import { CarouselPComponent } from './carousel-p/carousel-p.component';

import { TripsComponent } from './trips/trips.component';
import { FooterComponent } from './footer/footer.component';

import { PiligrimageComponent } from './piligrimage/piligrimage.component';
import { DesertComponent } from './desert/desert.component';
import { BeachComponent } from './beach/beach.component';
import { SnowsitesComponent } from './snowsites/snowsites.component';
import { AdventureComponent } from './adventure/adventure.component';

import { PackageWComponent } from './package-w/package-w.component';
import { ToastrModule } from 'ngx-toastr';
import { HoneymoonComponent } from './honeymoon/honeymoon.component';
import { PackageJSComponent } from './package-js/package-js.component';
import { NgxPrintModule } from 'ngx-print';

import { LogoutComponent } from './logout/logout.component';
import { SocialLoginModule } from 'angularx-social-login/sociallogin.module';
import { SocialAuthServiceConfig } from 'angularx-social-login/socialauth.service';
import { GoogleLoginProvider } from 'angularx-social-login';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    PackageHSComponent,
    TripsComponent,
    FooterComponent,
    CarouselPComponent,
    PiligrimageComponent,
    DesertComponent,
    BeachComponent,
    SnowsitesComponent,
    AdventureComponent,
    PackageWComponent,
    HoneymoonComponent,
    PackageJSComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxOtpInputModule,
    NgImageSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    MatIconModule,
    NgxPrintModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('305164231371-tsms046vup1o6hop40528f37a9ivbffr.apps.googleusercontent.com'),
          },
        ],
      }  as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
