import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabContentComponent } from '../app/components/tab-content.component';

export default {
  title: 'TabContent',
  component: TabContentComponent,
} as Meta;

const Template: Story<TabContentComponent> = (args: TabContentComponent) => ({
  props: args,
});

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
