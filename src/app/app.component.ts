import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatomoTracker } from "@ngx-matomo/tracker";
import { EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private readonly matomoTracker: MatomoTracker) {}

  year = new Date().getFullYear();
  title = "Angular Metrics Playground";
  author = "Francisco Gonçalves";
  tab = 0;
  step = 0;
  completed = false;
  submitted = false;
  steps = ["A", "B", "C", "D", "E"];
  tabs = ["heroBolt", "heroChartPie", "heroCodeBracketSquare", "heroLightBulb", "heroPaperClip"];

  // Add these methods
  trackStepChange(step: number) {
    this.matomoTracker.trackEvent("AppComponent", "StepChange", "Step", step);
    this.matomoTracker.setCustomVariable(2, "Step", step.toString(), "event");
  }

  trackTabChange(tab: number) {
    this.matomoTracker.trackEvent("AppComponent", "TabChange", "Tab", tab);
    this.matomoTracker.setCustomVariable(1, "Tab", tab.toString(), "page");
  }

  stepChange = new EventEmitter<number>();
  tabChange = new EventEmitter<number>();
  private subscription = new Subscription();

  ngOnInit() {
    this.matomoTracker.trackPageView();

    // Subscribe to stepChange and tabChange events
    this.subscription.add(
      this.stepChange.subscribe((step) => {
        this.trackStepChange(step);
      })
    );

    this.subscription.add(
      this.tabChange.subscribe((tab) => {
        this.trackTabChange(tab);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeTab(tabIndex: number) {
    this.tab = tabIndex;
    this.tabChange.emit(this.tab); // Emit the event
  }

  nextStep() {
    if (this.completed && this.submitted) return;

    if (!this.completed) {
      this.step += 1;
      if (this.step === this.steps.length - 1) this.completed = true;
    } else this.submitted = true;

    this.stepChange.emit(this.step); // Emit the event
  }

  prevStep() {
    if (this.submitted) return;
    if (!this.completed && this.step !== 0) {
      this.step -= 1;
    } else if (this.completed) {
      this.step -= 1;
      this.completed = false;
    }

    this.stepChange.emit(this.step); // Emit the event
  }
}
