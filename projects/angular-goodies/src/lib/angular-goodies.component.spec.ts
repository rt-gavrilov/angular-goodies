import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGoodiesComponent } from './angular-goodies.component';

describe('AngularGoodiesComponent', () => {
  let component: AngularGoodiesComponent;
  let fixture: ComponentFixture<AngularGoodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGoodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
