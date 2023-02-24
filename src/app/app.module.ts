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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
