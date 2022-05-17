import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tab as TabHeader } from "../components/Tab";

export default {
  title: "TabHeader",
  component: TabHeader,
} as ComponentMeta<typeof TabHeader>;

const Template: ComponentStory<typeof TabHeader> = (args) => (
  <TabHeader {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  title: "Tab 1",
  index: 0,
  selected: false,
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: "Tab 1",
  index: 0,
  selected: false,
  variant: "outlined",
};
