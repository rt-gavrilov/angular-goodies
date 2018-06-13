import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PreventBubblingDemoComponent} from './prevent-bubbling-demo/prevent-bubbling-demo.component';
import {AngularGoodiesModule} from "angular-goodies";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    PreventBubblingDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    AngularGoodiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
