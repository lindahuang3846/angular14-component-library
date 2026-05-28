import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaUiComponentsComponent } from './bofa-ui-components.component';

describe('BofaUiComponentsComponent', () => {
  let component: BofaUiComponentsComponent;
  let fixture: ComponentFixture<BofaUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaUiComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BofaUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
