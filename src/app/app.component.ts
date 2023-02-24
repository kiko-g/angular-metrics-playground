import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  year = new Date().getFullYear();
  title = "Angular Metrics Playground";
  author = "Francisco Gonçalves";
  tab = 0;
  tabs = ["heroBolt", "heroChartPie", "heroCodeBracketSquare", "heroLightBulb", "heroPaperClip"];

  changeTab(tabIndex: number) {
    this.tab = tabIndex;
  }
}
