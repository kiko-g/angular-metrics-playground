import { Injectable, isDevMode } from "@angular/core";
import envDevelopment from "../env/environment";
import envProduction from "../env/environment.prod";

import { NgModule } from "@angular/core";
import { NgIconsModule } from "@ng-icons/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  heroBolt,
  heroChartPie,
  heroCodeBracketSquare,
  heroLightBulb,
  heroPaperClip,
  heroArrowTopRightOnSquare,
} from "@ng-icons/heroicons/outline";
import { MatomoTracker, NgxMatomoTrackerModule } from "@ngx-matomo/tracker";
import {
  MatomoRouteDataInterceptor,
  MatomoRouterInterceptor,
  NgxMatomoRouterModule,
} from "@ngx-matomo/router";

const env = isDevMode() ? envDevelopment : envProduction;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroBolt,
      heroChartPie,
      heroCodeBracketSquare,
      heroLightBulb,
      heroPaperClip,
      heroArrowTopRightOnSquare,
    }),
    NgxMatomoTrackerModule.forRoot({
      trackerUrl: env.matomoUrl,
      siteId: envProduction.matomoSiteId,
    }),
    NgxMatomoRouterModule.forRoot({
      // Declare built-in MatomoRouteDataInterceptor
      interceptors: [MatomoRouteDataInterceptor],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  env = env;
}
