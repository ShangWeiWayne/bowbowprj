/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FdivComponent } from './fdiv.component';

describe('FdivComponent', () => {
  let component: FdivComponent;
  let fixture: ComponentFixture<FdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
