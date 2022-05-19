import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabHeaderComponent } from '../app/components/tab-header.component';

export default {
  title: 'TabHeader',
  component: TabHeaderComponent,
} as Meta;

const Template: Story<TabHeaderComponent> = (args: TabHeaderComponent) => ({
  props: args,
});

export const Contained = Template.bind({});
Contained.args = {
  title: 'Tab 1',
  selected: false,
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: 'Tab 1',
  selected: false,
  variant: 'outlined',
};
