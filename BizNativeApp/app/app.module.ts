import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { HomeModule } from "./modules/home/home.module";
import { RegisterModule } from "./modules/register/register.module";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    HomeModule,
    RegisterModule
  ],
  declarations: [AppComponent,SIDEDRAWER_DIRECTIVES],
  bootstrap: [AppComponent]
})
export class AppModule { }
