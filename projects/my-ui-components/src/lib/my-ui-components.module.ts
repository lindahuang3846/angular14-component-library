import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyUiComponentsComponent } from './my-ui-components.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    MyUiComponentsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyUiComponentsComponent,
    CardComponent
  ]
})
export class MyUiComponentsModule { }
