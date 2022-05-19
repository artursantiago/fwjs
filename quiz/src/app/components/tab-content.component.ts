import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  template: `
    <p
      [ngClass]="{
        TabContent: true,
        contained: variant !== 'outlined',
        outlined: variant === 'outlined'
      }"
    >
      {{ content || DEFAULT_CONTENT }}
    </p>
  `,
  styles: [
    `
      .TabContent {
        background: #f0f0f0;
        border: 1px solid #aaaaaa;
        box-sizing: border-box;
        border-radius: 10px;
        min-height: 130px;
        padding: 24px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
      }

      .TabContent.outlined {
        background: transparent;
        border: 1px solid #aaaaaa;
      }
    `,
  ],
})
export class TabContentComponent {
  DEFAULT_CONTENT = 'Selecione uma tab...';

  @Input() content?: string = ''; // enunciado da questão
  @Input() variant?: 'contained' | 'outlined' = 'contained';
}
