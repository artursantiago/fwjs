import TabContent from "../components/TabContent.svelte";

export default {
  title: "TabContent",
  component: TabContent,
};

const Template = (args) => ({
  components: TabContent,
  props: args,
});

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
