// vitest.setup.ts
import { beforeEach } from 'vitest'
import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify()

config.global.plugins = [vuetify]

beforeEach(() => {
  config.global.plugins = [vuetify] // Ensures Vuetify is available globally in each test
})
