import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="InputContainer">
      <label [for]="id">{{ label }}</label>
      <input
        [id]="id"
        [name]="name"
        [value]="value"
        (input)="change.emit($event)"
      />
      <span *ngIf="!!errorMessage" class="errorMessage">{{
        errorMessage
      }}</span>
    </div>
  `,
  styles: [
    `
      .InputContainer span {
        display: block;
        color: red;
        font-size: 12px;
      }
    `,
  ],
})
export class InputComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() label?: HTMLElement | string;
  @Input() errorMessage?: string;
  @Input() value?: string;

  @Output() change = new EventEmitter();

  constructor() {}
}
