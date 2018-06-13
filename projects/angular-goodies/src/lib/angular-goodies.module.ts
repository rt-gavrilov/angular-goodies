import {NgModule} from '@angular/core';
import {PreventBubblingDirective} from "./prevent-bubbling.directive";

@NgModule({
  imports: [
  ],
  declarations: [
    PreventBubblingDirective
  ],
  exports: [
    PreventBubblingDirective
  ]
})
export class AngularGoodiesModule { }
