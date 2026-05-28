import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUiComponentsComponent } from './my-ui-components.component';

describe('MyUiComponentsComponent', () => {
  let component: MyUiComponentsComponent;
  let fixture: ComponentFixture<MyUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyUiComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
