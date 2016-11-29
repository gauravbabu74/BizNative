import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ns-register",
  templateUrl: "register.component.html",
  styleUrls: ["register.component.css"]
})


export class RegisterComponent {
    registerSubmit() {
        alert("registerSubmit Call");
    }
}