import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "../components/Container";

export default {
  title: "Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: "tab 1",
      content: "Texto do primeiro tab",
    },
    {
      title: "tab 2",
      content: "Texto do segundo tab",
    },
    {
      title: "tab 3",
      content: "Texto do terceiro tab",
    },
    {
      title: "tab 4",
      content: "Texto do quarto tab",
    },
  ],
};
