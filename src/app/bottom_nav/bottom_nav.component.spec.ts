/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Bottom_navComponent } from './bottom_nav.component';

describe('Bottom_navComponent', () => {
  let component: Bottom_navComponent;
  let fixture: ComponentFixture<Bottom_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bottom_navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bottom_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
