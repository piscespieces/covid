import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { EstateLevelRoutingModule } from "./estate-level/estate-level.routing.module";

import { AppComponent } from "./app.component";
import { GeomapComponent } from "./home/geomap/geomap.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TotalCasesComponent } from "./home/total-cases/total-cases.component";
import { TableComponent } from "./home/table/table.component";

import { GoogleChartsModule } from "angular-google-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

import { environment } from "../environments/environment.prod";

@NgModule({
  declarations: [
    AppComponent,
    GeomapComponent,
    NavbarComponent,
    TotalCasesComponent,
    TableComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstateLevelRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(environment.google_api), // GOOGLE API KEY, GET YOURS!
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
