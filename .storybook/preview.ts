import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import { withVuetifyTheme } from "./withVuetifyTheme.decorator.js";

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});

// Theme Switching for Vuetify
export const globalTypes = {
  theme: {
    name: 'VuetifyTheme',
    description: 'Vuetify theme for components',
    toolbar: {
      title: "Vuetify Theme",
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'customLightTheme', title: 'customLightTheme', left: '🌞' },
        { value: 'customDarkTheme', title: 'customDarkTheme', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

/** @type { import('@storybook/vue').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withVuetifyTheme],
  tags: ['autodocs'],
};

export default preview;
