/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Float_divComponent } from './float_div.component';

describe('Float_divComponent', () => {
  let component: Float_divComponent;
  let fixture: ComponentFixture<Float_divComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Float_divComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Float_divComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
