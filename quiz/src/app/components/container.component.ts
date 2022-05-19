import { Component, Input } from '@angular/core';

type Tab = {
  title: string;
  content: string;
  variant?: 'contained' | 'outlined';
};

@Component({
  selector: 'app-container',
  template: `
    <div class="Container">
      <div class="TabList">
        <app-tab-header
          *ngFor="let tab of tabs; let i = index"
          [title]="tab?.title"
          [variant]="tab?.variant"
          [selected]="selectedTab?.title === tab?.title"
          (onSelection)="select($event)"
        ></app-tab-header>
      </div>
      <app-tab-content
        [content]="selectedTab?.content"
        [variant]="selectedTab?.variant"
      >
      </app-tab-content>
    </div>
  `,
  styles: [
    `
      .Container {
        max-width: 514px;
        min-width: 430px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .TabList {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class ContainerComponent {
  @Input() tabs: Tab[] = [
    {
      title: 'tab 1',
      content: 'Conteúdo da tab 1',
    },
    {
      title: 'tab 2',
      content: 'Conteúdo da tab 2',
    },
    {
      title: 'tab 3',
      content: 'Conteúdo da tab 3',
    },
    {
      title: 'tab 4',
      content: 'Conteúdo da tab 4',
    },
  ];

  selectedTab: Tab | undefined = undefined;

  select(title: string) {
    const newSelectedTab = this.tabs.find((tab) => title === tab.title);
    this.selectedTab = newSelectedTab;
  }
}
