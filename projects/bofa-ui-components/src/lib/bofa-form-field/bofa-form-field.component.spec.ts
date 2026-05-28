import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaFormFieldComponent } from './bofa-form-field.component';

describe('BofaFormFieldComponent', () => {
  let component: BofaFormFieldComponent;
  let fixture: ComponentFixture<BofaFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BofaFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
