import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  @Input() placeholder = 'Search...';
  @Input() label = 'Search';
  @Output() searchChange = new EventEmitter<string>();

  value = '';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.searchChange.emit(this.value);
  }

  clear(): void {
    this.value = '';
    this.searchChange.emit('');
  }
}
