import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="Button" (click)="action?.emit()" type="button">
      {{ text }}
    </button>
  `,
  styles: [
    `
      .Button {
        padding: 8px;
        background: #7b61ff;
        color: white;
        border: none;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() text?: string;
  @Output() action = new EventEmitter();

  constructor() {}
}
