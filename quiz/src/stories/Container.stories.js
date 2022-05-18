import Container from "../components/task/Container.vue";

export default {
  title: "Container",
  component: Container,
};

const Template = (args) => ({
  components: { Container },
  setup() {
    return { args };
  },
  template: '<Container v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: "tab 1",
      content: "Texto do primeiro tab",
      variant: "contained",
    },
    {
      title: "tab 2",
      content: "Texto do segundo tab",
      variant: "contained",
    },
    {
      title: "tab 3",
      content: "Texto do terceiro tab",
      variant: "contained",
    },
    {
      title: "tab 4",
      content: "Texto do quarto tab",
      variant: "outlined",
    },
  ],
};
