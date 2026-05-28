import { Component, Input, Output, EventEmitter } from '@angular/core';

export type BofaFormFieldType = 'text' | 'email' | 'password' | 'number' | 'tel';

@Component({
  selector: 'bofa-form-field',
  templateUrl: './bofa-form-field.component.html',
  styleUrls: ['./bofa-form-field.component.css']
})
export class BofaFormFieldComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: BofaFormFieldType = 'text';
  @Input() value = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Output() valueChange = new EventEmitter<string>();

  focused = false;

  get hasError(): boolean {
    return this.errorMessage.length > 0;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.focused = true;
  }

  onBlur(): void {
    this.focused = false;
  }
}
