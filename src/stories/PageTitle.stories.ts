// src/stories/PageTitle.stories.ts
import PageTitle from '../components/shared/PageTitle.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
  argTypes: {
    title: { control: 'text', description: 'The main title text' },
  },
} as Meta<typeof PageTitle>

const Template: Story<typeof PageTitle> = args => ({
  components: { PageTitle },
  setup () {
    return { args }
  },
  template: '<PageTitle v-bind="args">{{ args.title }}</PageTitle>',
})

export const Default = Template.bind({})
Default.args = {
  title: 'Default Page Title',
}

export const WithPrefix = args => ({
  components: { PageTitle },
  setup () {
    return { args }
  },
  template: `
    <PageTitle v-bind="args">
      <template #prefix>Prefix Text:</template>
      {{ args.title }}
    </PageTitle>
  `,
})
WithPrefix.args = {
  title: 'Title with Prefix',
}
