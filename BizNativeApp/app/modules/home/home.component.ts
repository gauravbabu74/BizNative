import { Component } from "@angular/core";
import frameModule = require("ui/frame");


@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})

export class HomeComponent {
    login() {
        alert("Login Call");
    }
    forgotPass()
    {
        prompt({title: "Forgot Password",message: "Enter the email address you used to register for Groceries to reset your password.",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
        }).then((data) => {
        if (data.result) {
         alert("Forgot Password");
        }
        });
    }
    registerPage()
    {
        var topmost = frameModule.topmost();
        topmost.navigate("register");
    }
    testcall()
    {
        alert("sfsfsf");
    }
}