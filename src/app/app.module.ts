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
} from "@ng-icons/heroicons/outline";
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { NgxMatomoRouterModule } from '@ngx-matomo/router';

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
    }),
    NgxMatomoTrackerModule.forRoot({ trackerUrl: '', siteId: '' }),
    NgxMatomoRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
