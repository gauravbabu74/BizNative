import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";

import { registerRouting } from "./register.routes";
import { RegisterComponent } from "./register.component";


@NgModule({
  imports: [
    NativeScriptModule,
    registerRouting
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}