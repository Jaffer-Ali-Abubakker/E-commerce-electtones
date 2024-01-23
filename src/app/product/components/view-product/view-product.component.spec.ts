import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCardComponent } from './view-product.component';

describe('AddToCardComponent', () => {
  let component: AddToCardComponent;
  let fixture: ComponentFixture<AddToCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToCardComponent]
    });
    fixture = TestBed.createComponent(AddToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
