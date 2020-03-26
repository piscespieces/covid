import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GeomapComponent } from './geomap/geomap.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    GeomapComponent,
    NavbarComponent,
    TotalCasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot('AIzaSyAYseQyQEwxNPUs7gZDvtuFMN7fs3NPSos'), // GOOGLE API KEY, GET YOURS!
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
