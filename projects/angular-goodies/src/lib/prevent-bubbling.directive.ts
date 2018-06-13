import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: "[rtPreventBubbling]"
})
export class PreventBubblingDirective {

  @Input('rtPreventBubbling') set event(value: string) {
    this.el.nativeElement.addEventListener(value, event => {
      event.stopPropagation();
    });
  }

  constructor(
    private el: ElementRef
  ) {}
}
