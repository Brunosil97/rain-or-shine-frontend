/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/main.scss'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const customLightTheme = {
  dark: false,
  colors: {
    primary: '#00324B',
    secondary: '#00A7B5',
    accent: '#FFC72C',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#f7f7f5',
    'background-darken-1': '#E9E9E9',
  },
  variables: {},
}

const customDarkTheme = {
  dark: true,
  colors: {
    primary: '#202020',
    secondary: '#5B7994',
    accent: '#FFC72C',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#F19B00',
    background: '#424242',
    'text-on-background': '#FFFFFF',
    'background-darken-1': '#404040',
  },
  variables: {},
}

export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
  },
  theme: {
    options: {
      customProperties: true,
    },
    variations: {
      colors: [
        'primary',
        'secondary',
        'accent',
        'warning',
        'blue',
        'red',
        'error',
        'grey',
      ],
      lighten: 5,
      darken: 5,
    },
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
      customDarkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VApp: {
      style: [{ fontFamily: 'Rubik, Verdana, sans-serif' }],
    },
  },
})
