// src/stories/ErrorMessage.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import ErrorMessage from '@/components/errors/ErrorMessage.vue'

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    error: { control: 'text' },
    retry: { control: 'boolean' },
    snackbar: { control: 'boolean' },
  },
} as Meta<typeof ErrorMessage>

// Default (Normal) View with Retry
const Template: StoryFn<typeof ErrorMessage> = args => ({
  components: { ErrorMessage },
  setup () {
    return { args }
  },
  template: '<ErrorMessage v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  error: 'Unable to load data',
  retry: true,
  snackbar: false,
}

// Snackbar Mode
export const SnackbarMode = Template.bind({})
SnackbarMode.args = {
  error: 'Unable to load data',
  retry: true,
  snackbar: true,
}

// Normal View without Retry
export const NoRetry = Template.bind({})
NoRetry.args = {
  error: 'Service temporarily unavailable',
  retry: false,
  snackbar: false,
}
