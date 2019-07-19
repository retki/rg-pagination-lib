import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPaginationLibComponent } from './rg-pagination-lib.component';

describe('RgPaginationLibComponent', () => {
  let component: RgPaginationLibComponent;
  let fixture: ComponentFixture<RgPaginationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgPaginationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgPaginationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
