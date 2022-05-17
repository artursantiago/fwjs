import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TabContent } from "../components/TabContent";

export default {
  title: "TabContent",
  component: TabContent,
} as ComponentMeta<typeof TabContent>;

const Template: ComponentStory<typeof TabContent> = (args) => (
  <TabContent {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
