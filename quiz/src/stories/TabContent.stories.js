import TabContent from "../components/task/TabContent.vue";

export default {
  title: "TabContent",
  component: TabContent,
};

const Template = (args) => ({
  components: { TabContent },
  setup() {
    return { args };
  },
  template: '<TabContent v-bind="args" />',
});

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
