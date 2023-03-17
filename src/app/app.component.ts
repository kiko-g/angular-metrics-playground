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
  author = "Francisco Gonçalves";
  title = "Angular Metrics Playground";
  tabs = ["heroBolt", "heroChartPie", "heroCodeBracketSquare", "heroLightBulb", "heroPaperClip"];
  steps = ["A", "B", "C", "D", "E"];

  tab = 0;
  step = 0;
  ready = false;
  submitted = false;

  // track wizard completed state
  tracksubmitChange(submitted: boolean) {
    this.matomoTracker.trackEvent(
      "AppComponent",
      "Wizard Submission",
      submitted ? "Submitted" : "Not Submitted"
    );
  }

  // track wizard step change
  trackWizardStepChange(step: number) {
    this.matomoTracker.trackEvent("AppComponent", "StepChange", "Step", step);
    this.matomoTracker.setCustomVariable(2, "Step", step.toString(), "event");
  }

  // track tab value change
  trackTabChange(tab: number) {
    this.matomoTracker.trackEvent("AppComponent", "TabChange", "Tab", tab);
    this.matomoTracker.setCustomVariable(1, "Tab", tab.toString(), "page");
  }

  submitChange = new EventEmitter<boolean>();
  stepChange = new EventEmitter<number>();
  tabChange = new EventEmitter<number>();
  private subscription = new Subscription();

  ngOnInit() {
    this.matomoTracker.trackPageView();

    // track step value
    this.subscription.add(
      this.stepChange.subscribe((step) => {
        this.trackWizardStepChange(step);
      })
    );

    // track tab value
    this.subscription.add(
      this.tabChange.subscribe((tab) => {
        this.trackTabChange(tab);
      })
    );

    // track submitted value
    this.subscription.add(
      this.submitChange.subscribe((submitted) => {
        this.tracksubmitChange(submitted);
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
    if (this.ready && this.submitted) return;

    if (this.ready) {
      this.submitted = true;
      this.submitChange.emit(this.submitted); // Emit the event
    } else {
      this.step += 1;
      this.stepChange.emit(this.step); // Emit the event
      if (this.step === this.steps.length - 1) this.ready = true;
    }
  }

  prevStep() {
    if (this.submitted) return;

    if (this.step > 0 && !this.ready) {
      this.step -= 1;
    } else if (this.ready) {
      this.step -= 1;
      this.ready = false;
    }

    this.stepChange.emit(this.step); // Emit the event
  }

  reset() {
    this.step = 0;
    this.ready = false;
    this.submitted = false;
    this.stepChange.emit(this.step); // Emit the event
    this.submitChange.emit(this.submitted); // Emit the event
    this.matomoTracker.setCustomVariable(4, "Wizard Reset", "Reset", "event");
  }
}
