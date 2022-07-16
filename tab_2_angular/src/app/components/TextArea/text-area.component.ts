import { Component, EventEmitter, Input, Output } from '@angular/core';

type Tab = {
  title: string;
  content: string;
  variant?: 'contained' | 'outlined';
};

@Component({
  selector: 'app-text-area',
  template: `
    <div class="TextAreaContainer">
      <label [for]="id">{{ label }}</label>
      <textarea
        [id]="id"
        [name]="name"
        [value]="value"
        (input)="change.emit($event)"
      ></textarea>
      <span *ngIf="!!errorMessage" class="errorMessage">{{
        errorMessage
      }}</span>
    </div>
  `,
  styles: [
    `
      .TextAreaContainer span {
        display: block;
        color: red;
        font-size: 12px;
      }
    `,
  ],
})
export class TextAreaComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() label?: HTMLElement | string;
  @Input() errorMessage?: string;
  @Input() value?: string;
  @Output() change = new EventEmitter();

  constructor() {}
}
