import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="Tabs">
      <div>
        <div class="TabNavList">
          <app-tab-header
            *ngFor="let tab of (state$ | async).tabs; let i = index"
            [index]="i"
            [title]="tab?.title"
          ></app-tab-header>
        </div>
        <app-tab-content></app-tab-content>
      </div>
    </div>
  `,
  styles: [
    `
      .TabNavList {
        display: flex;
      }
    `,
  ],
})
export class TabsComponent {
  state$ = this.store.select('AppReducer');

  constructor(public store: Store<any>) {}
}
