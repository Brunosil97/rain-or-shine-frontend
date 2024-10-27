import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PageTitle from '@/components/shared/PageTitle.vue'

describe('PageTitle.vue', () => {
  it('should not apply underline when showUnderline is false', async () => {
    const wrapper = mount(PageTitle, {
      props: {
        title: 'London Calling',
      },
    })

    await wrapper.vm.$nextTick()

    // Check if underline is not applied
    expect(wrapper.find('.underline').exists()).toBe(false)
  })

  it('should animate title on mount', async () => {
    const wrapper = mount(PageTitle, {
      props: {
        title: 'London is not calling',
      },
    })

    // Wait for the component to mount and animate
    await wrapper.vm.$nextTick()

    // Check if animate ref is true after mount
    expect(wrapper.vm.animate).toBe(true)
  })
})
