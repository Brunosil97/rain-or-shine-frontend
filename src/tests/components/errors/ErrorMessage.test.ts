// tests/components/ErrorMessage.test.ts
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ErrorMessage from '@/components/errors/ErrorMessage.vue'

describe('ErrorMessage.vue', () => {
  beforeEach(() => {
    // Mock dayjs with plugin for ErrorMessage component
    vi.mock('dayjs', async () => {
      const dayjs = (await vi.importActual<typeof import('dayjs')>('dayjs')).default
      const utc = (await vi.importActual<typeof import('dayjs/plugin/utc')>('dayjs/plugin/utc')).default
      return {
        default: dayjs.extend(utc),
      }
    })
  })

  it('renders error title and description when error prop is provided', () => {
    const wrapper = mount(ErrorMessage, {
      props: { error: 'Test Error Message' },
    })

    expect(wrapper.text()).toContain('Test Error Message')
    expect(wrapper.text()).toContain('Oops! Something has gone wrong')
  })

  it('shows retry button if retry prop is true', () => {
    const wrapper = mount(ErrorMessage, {
      props: { error: 'Test Error Message', retry: true },
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('shows snackbar if snackbar prop is true', async () => {
    const wrapper = mount(ErrorMessage, {
      props: { error: 'Test Error Message', snackbar: true },
    })

    await wrapper.setProps({ error: 'New Error Message' })
    expect(wrapper.vm.showSnackbar).toBe(true)
  })

  it('emits retry event on button click', async () => {
    const wrapper = mount(ErrorMessage, {
      props: { error: 'Test Error Message', retry: true },
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('retry')
  })
})
