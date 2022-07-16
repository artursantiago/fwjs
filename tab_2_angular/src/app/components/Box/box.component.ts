import { Component, ContentChildren, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <section class="Box">
      <header>{{ title }}</header>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      .Box {
        padding: 16px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        min-width: 400px;
        min-height: 400px;
      }

      .Box header {
        padding: 8px 0;
        font-size: 18px;
      }
    `,
  ],
})
export class BoxComponent {
  @Input() title?: string = '';
  @Input() className?: string = '';

  @ContentChildren('children')
  children: QueryList<any> | null = null;
}
