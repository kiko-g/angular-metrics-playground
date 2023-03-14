import { Component, OnInit } from "@angular/core";
import { MatomoTracker } from "@ngx-matomo/tracker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private readonly tracker: MatomoTracker) {}

  ngOnInit() {
    this.tracker.trackPageView();
    this.tracker.trackEvent("Tab", "Clicked", "Label", this.tab);
    this.tracker.trackEvent("Wizard", "Clicked", "Step", this.step);
  }

  year = new Date().getFullYear();
  title = "Angular Metrics Playground";
  author = "Francisco Gonçalves";
  tab = 0;
  step = 0;
  completed = false;
  submitted = false;
  steps = ["A", "B", "C", "D", "E"];
  tabs = ["heroBolt", "heroChartPie", "heroCodeBracketSquare", "heroLightBulb", "heroPaperClip"];

  changeTab(tabIndex: number) {
    this.tab = tabIndex;
  }

  nextStep() {
    if (this.completed && this.submitted) return;

    if (!this.completed) {
      this.step += 1;
      if (this.step === this.steps.length - 1) this.completed = true;
    } else {
      this.submitted = true;
    }
  }

  prevStep() {
    if (this.submitted) return;

    if (!this.completed && this.step !== 0) {
      this.step -= 1;
    } else if (this.completed) {
      this.step -= 1;
      this.completed = false;
    }
  }
}
