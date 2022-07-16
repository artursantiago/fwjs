export type FormTab = {
  title: string;
  content: string;
  errorMessage: {
    title?: string;
    content?: string;
  };
};

import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { generateTabs, validateTabs } from 'src/utils';
import { setTabs } from '../../store/ngrx';

@Component({
  selector: 'app-tabs-form',
  template: `
    <app-box title="Tabs">
      <app-input
        label="Núm.tabs"
        id="numTabs"
        name="numTabs"
        [value]="numTabs.toString()"
        (change)="handleNumTabChange($event)"
        [errorMessage]="numTabsErrorMessage"
      ></app-input>
      <hr />

      <div *ngFor="let tab of formTabs; let i = index">
        <app-input
          label="Título"
          id="title"
          name="title"
          [value]="tab.title"
          (change)="changeTabField('title', i, $event)"
          [errorMessage]="tab.errorMessage?.title"
        ></app-input>

        <app-text-area
          label="Conteúdo"
          id="content"
          name="content"
          [value]="tab.content"
          (change)="changeTabField('content', i, $event)"
          [errorMessage]="tab.errorMessage?.content"
        ></app-text-area>
      </div>

      <app-button text="Salvar" (action)="saveFormTabs()"></app-button>
    </app-box>
  `,
  styles: [
    `
      .TabNavList {
        display: flex;
      }
    `,
  ],
})
export class FormComponent {
  numTabs = 0;
  numTabsErrorMessage = '';
  formTabs: FormTab[] = [];

  constructor(public store: Store<any>) {}

  saveFormTabs() {
    const { validatedTabs, hasErrors } = validateTabs(this.formTabs);

    if (hasErrors) {
      this.formTabs = validatedTabs;
      return;
    }

    this.store.dispatch(
      setTabs({
        tabs: this.formTabs,
      })
    );
  }

  changeTabField(field: 'title' | 'content', index: number, event: Event) {
    this.formTabs = this.formTabs.map((tab, i) => {
      if (index === i) {
        return {
          ...tab,
          [field]: (event?.target as any)?.value,
        };
      }
      return tab;
    });
  }

  handleNumTabChange(event: Event) {
    this.numTabs = Number((event?.target as any)?.value);

    if (this.numTabs < 1) {
      this.numTabsErrorMessage = 'Não pode ser menor do que 1';
      return;
    }

    this.formTabs = generateTabs(this.numTabs, this.formTabs);
    this.numTabsErrorMessage = '';
  }
}
