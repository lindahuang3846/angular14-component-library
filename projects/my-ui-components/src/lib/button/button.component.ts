import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() variant: 'raised' | 'flat' | 'stroked' = 'raised';
  @Input() disabled = false;
}
