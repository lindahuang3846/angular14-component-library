import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MyUiComponentsComponent } from './my-ui-components.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { SearchFieldComponent } from './search-field/search-field.component';

@NgModule({
  declarations: [
    MyUiComponentsComponent,
    CardComponent,
    ButtonComponent,
    SearchFieldComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MyUiComponentsComponent,
    CardComponent,
    ButtonComponent,
    SearchFieldComponent
  ]
})
export class MyUiComponentsModule { }
