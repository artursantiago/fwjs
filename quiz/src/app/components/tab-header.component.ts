import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  template: `
    <button
      type="button"
      [ngClass]="{
        TabHeader: true,
        contained: variant !== 'outlined',
        outlined: variant === 'outlined',
        selected
      }"
      (click)="select(title)"
    >
      {{ title }}
    </button>
  `,
  styles: [
    `
      .TabHeader {
        background: #cccccc;
        border: 1px solid #777777;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 4px 24px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        cursor: pointer;
      }
      .TabHeader.selected {
        background: #aaaaaa;
        font-weight: 700;
      }
      .TabHeader.outlined {
        background: transparent;
        border: 1px solid #777777;
      }

      .TabHeader.outlined.selected {
        background: transparent;
        border-width: 2px;
      }
    `,
  ],
})
export class TabHeaderComponent {
  @Input() title?: string = '';
  @Input() selected?: boolean = false;
  @Input() variant?: 'contained' | 'outlined' = 'contained';

  @Output() onSelection = new EventEmitter<string>();

  select(title?: string) {
    this.onSelection.emit(title);
  }
}
