import {Component} from '@angular/core';

@Component({
  selector: 'prevent-bubbling-demo',
  templateUrl: './prevent-bubbling-demo.component.html',
  styleUrls: ['./prevent-bubbling-demo.component.scss']
})
export class PreventBubblingDemoComponent {

  constructor() { }

  onContainerClick() {
    alert('container clicked');
  }

  onButtonClick() {
    alert('button clicked');
  }
}
