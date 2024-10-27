import { Meta, StoryFn } from '@storybook/vue3'
import AppBarDesktop from '../components/shell/AppBarDesktop.vue'

export default {
  title: 'Components/AppBarDesktop',
  component: AppBarDesktop,
} as Meta<typeof AppBarDesktop>

const Template: StoryFn<typeof AppBarDesktop> = args => ({
  components: { AppBarDesktop },
  setup () {
    return { args }
  },
  template: '<AppBarDesktop v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}
