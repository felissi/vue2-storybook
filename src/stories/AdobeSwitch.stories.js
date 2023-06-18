import AdobeSwitch from "../components/AdobeSwitch.vue";

// /** @type {import('@storybook/vue').StoryObj} */
/** @type {import('@storybook/vue').Meta} */
export default {
  title: "Example/AdobeSwitch",
  component: AdobeSwitch,
  tags: ["autodocs"],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AdobeSwitch },
    template: '<AdobeSwitch @onClick="onClick" v-bind="$props" />',
  }),
  argTypes: {},
};
// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

export const xs = {
  args: {
    size: "xs",
  },
};
