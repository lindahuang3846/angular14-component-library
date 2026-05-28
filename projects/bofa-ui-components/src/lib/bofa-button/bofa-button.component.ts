import { Component, Input, Output, EventEmitter } from '@angular/core';

export type BofaButtonVariant = 'primary' | 'secondary' | 'text';
export type BofaButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'bofa-button',
  templateUrl: './bofa-button.component.html',
  styleUrls: ['./bofa-button.component.css']
})
export class BofaButtonComponent {
  @Input() variant: BofaButtonVariant = 'primary';
  @Input() size: BofaButtonSize = 'medium';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
