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
  value = "";

  actions = [
    {
      name: "A",
      action: () => {
        console.log("OLA");
        this.value = "A";
      },
    },
    {
      name: "B",
      action: () => {
        this.value = "B";
      },
    },
    {
      name: "C",
      action: () => {
        this.value = "C";
      },
    },
    {
      name: "D",
      action: () => {
        this.value = "D";
      },
    },
  ];
}
