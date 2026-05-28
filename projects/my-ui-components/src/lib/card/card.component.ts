import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() elevated = true;
}
