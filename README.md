# Weather Forecasting Tool
## Overview

This project is a responsive weather forecasting application built with Vue 3 and Vite. It connects to the Rain-or-Shine backend application to provide a detailed forecast, including an overview of today’s weather stats and hourly data figures. Using the Vuetify UI library, this application offers a modern, intuitive interface that adapts to various screen sizes, making it functional on both desktop and mobile devices.

The project is built with reusability in mind, using Storybook for visual component testing and Vitest for unit testing, ensuring a high-quality user experience and reliable data handling.

## Technologies Used
- Vue 3: JavaScript framework for building user interfaces
- Vite: Frontend build tool for fast development
- Vuetify: UI library for material design components
- Storybook: Tool for developing UI components in isolation
- Vitest: Testing framework compatible with Vite

## Project Structure
The src directory is organised as follows:

- src/
  - components/ - Contains all Vue components.
  - composables/ - Houses composable functions for encapsulating reusable logic.
  - config/ - Configuration files for application-wide settings.
  - plugins/ - Vite and Vue plugins, including Vuetify.
  - router/ - Manages application routing.
  - stores/ - Contains Pinia stores for state management.
  - stories/ - Storybook stories for isolated component testing.
  - tests/ - Unit and integration tests with Vitest.
  - styles/ - Custom CSS/SCSS for global and component-specific styling.

## Setup and Installation

### Prerequisites
Ensure Node.js and Yarn are installed on your machine.

### Installation Steps
- Clone the Repository:

```bash
git clone <repository-url>
cd <project-directory>
```
- Add the repository githooks by running:

```bash
git config core.hooksPath .githooks
```

- Install Dependencies:

```bash
yarn install
```
- Run the Development Server: Start the Vite development server for local development:

```bash
yarn dev
```

- Run ESLint:

```bash
yarn lint
```

- Build the Project: For production, build the project:

```bash
yarn build
```

- Preview the Production Build:

```bash
yarn preview
```

## Storybook
To visually test and develop UI components:

- Start Storybook:

```bash
yarn storybook
```

- Build Storybook:

```bash
yarn build-storybook
```

## Testing with Vitest

Vitest is used for unit and integration testing.

- Run Tests:

```bash
yarn test
```

- Run Tests with Coverage:

```bash
yarn test:coverage
```

## Development Workflow
- Component Development: Develop and test components in isolation using Storybook & Vitest.
- Reusable Logic: Use composables in src/composables/ for shared logic.
- State Management: Manage application state with Pinia in src/stores/.
- Routing: Define routes in src/router/ for modular navigation.
- Styling and Configurations: Adjust configurations in src/config/ and define styles in src/styles/.

## UI

- Dashboard:
  - [Dashboard](./src/assets/dashboard.png)

  - [Dashboard with Slider](./src/assets/dashboard-slider.png)

- Mobile:
  - [Mobile](./src/assets/mobile.png)

  -  [Mobile Cities](./src/assets/mobile-cities.png)

- Error:
  - [Error](./src/assets/error-handling.png)

## TODO
- Incorporate `**SearchBox.vue**` Component: Implement functionality in the `**SearchBox.vue**` component to utilise `**CitiesAPI**`. This integration will allow users to search for cities dynamically, enhancing the application’s interactivity and user experience for finding weather forecasts across various locations.

- Incorporate `**vue-i18n**` for translations of string texts.

- Incorporate Vuetify theme toggling for custom light & dark mode, additionally incorporate browser intergration.

- Expand on Vitest tests to utilise Pinia state management and test store logic

- Expand on E2E testing with incorporating Playwright