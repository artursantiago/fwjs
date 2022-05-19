import { Story, Meta } from '@storybook/angular/types-6-0';
import { ContainerComponent } from '../app/components/container.component';

export default {
  title: 'Container',
  component: ContainerComponent,
} as Meta;

export const Default: Story<ContainerComponent> = () => ({
  props: {
    tabs: [
      {
        title: 'tab 1',
        content: 'Texto do primeiro tab',
      },
      {
        title: 'tab 2',
        content: 'Texto do segundo tab',
      },
      {
        title: 'tab 3',
        content: 'Texto do terceiro tab',
      },
      {
        title: 'tab 4',
        content: 'Texto do quarto tab',
        variant: 'outlined',
      },
    ],
  },
});
