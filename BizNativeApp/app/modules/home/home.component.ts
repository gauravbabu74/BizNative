import { Component } from "@angular/core";
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})

export class HomeComponent {
    public constructor(private router: Router) {
 
    }
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
         this.router.navigate(["register"]);
    }
    testcall()
    {
        alert("sfsfsf");
    }
}