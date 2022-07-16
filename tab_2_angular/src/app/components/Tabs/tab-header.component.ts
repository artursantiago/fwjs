import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTab } from '../../store/ngrx';

@Component({
  selector: 'app-tab-header',
  template: `
    <div>
      <button
        [ngClass]="{
          TabHeader: true,
          selected: (state$ | async).selectedTabIndex === index
        }"
        type="button"
        (click)="select()"
      >
        {{ title }}
      </button>
    </div>
  `,
  styles: [
    `
      .TabHeader {
        background: transparent;
        border: none;
        border-bottom: 2px solid transparent;

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

        color: #ccc;
      }
      .TabHeader.selected {
        color: black;
        border-bottom: 2px solid blue;
      }
    `,
  ],
})
export class TabHeaderComponent {
  @Input() title?: string = '';
  @Input() index: number = 0;

  state$ = this.store.select('AppReducer');

  constructor(public store: Store<any>) {}

  select() {
    this.store.dispatch(
      changeTab({
        index: this.index,
      })
    );
  }
}
