import TabHeader from "../components/task/TabHeader.vue";

export default {
  title: "TabHeader",
  component: TabHeader,
};

const Template = (args) => ({
  components: { TabHeader },
  setup() {
    return { args };
  },
  template: '<TabHeader v-bind="args" />',
});

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
