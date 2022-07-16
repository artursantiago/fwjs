import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tab-content',
  template: `
    <p class="TabContent">
      {{ (state$ | async).selectedTab?.content }}
    </p>
  `,
  styles: [
    `
      .TabContent {
        box-sizing: border-box;
        border-radius: 10px;
        min-height: 130px;
        padding: 0 24px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
    `,
  ],
})
export class TabContentComponent {
  state$ = this.store.select('AppReducer');

  constructor(public store: Store<any>) {}
}
