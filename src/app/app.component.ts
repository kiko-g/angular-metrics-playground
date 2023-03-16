import { Component, OnInit } from "@angular/core";
import { MatomoTracker } from "@ngx-matomo/tracker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private readonly matomoTracker: MatomoTracker) {}

  ngOnInit() {
    this.matomoTracker.trackPageView();
    this.matomoTracker.trackEvent("AppComponent", "Clicked", "Label", this.tab);
    this.matomoTracker.trackEvent("AppComponent", "Clicked", "Step", this.step);
    this.matomoTracker.trackEvent("AppComponent", "completed", "true");
    this.matomoTracker.setCustomVariable(1, "Tab", this.tab.toString(), "page");
    this.matomoTracker.setCustomVariable(2, "Step", this.step.toString(), "event");
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
    } else this.submitted = true;
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
