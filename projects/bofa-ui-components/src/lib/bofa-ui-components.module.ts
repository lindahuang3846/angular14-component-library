import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BofaUiComponentsComponent } from './bofa-ui-components.component';
import { BofaButtonComponent } from './bofa-button/bofa-button.component';
import { BofaFormFieldComponent } from './bofa-form-field/bofa-form-field.component';

@NgModule({
  declarations: [
    BofaUiComponentsComponent,
    BofaButtonComponent,
    BofaFormFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BofaUiComponentsComponent,
    BofaButtonComponent,
    BofaFormFieldComponent
  ]
})
export class BofaUiComponentsModule { }
