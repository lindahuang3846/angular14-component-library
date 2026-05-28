import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaButtonComponent } from './bofa-button.component';

describe('BofaButtonComponent', () => {
  let component: BofaButtonComponent;
  let fixture: ComponentFixture<BofaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BofaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
