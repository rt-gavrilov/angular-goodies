import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventBubblingDemoComponent } from './prevent-bubbling-demo.component';

describe('PreventBubblingDemoComponent', () => {
  let component: PreventBubblingDemoComponent;
  let fixture: ComponentFixture<PreventBubblingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventBubblingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventBubblingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
