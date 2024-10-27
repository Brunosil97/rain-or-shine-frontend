<template>
  <v-theme-provider :theme="'customLightTheme'">
    <v-app class="bg-primary-lighten-2">
      <!-- Left side navigation menu -->
      <v-navigation-drawer
        v-if="!isMobile"
        v-model="drawer"
        class="py-5 px-2 text-white transition-width"
        :color="getNavBarColor"
        floating
        order="1"
        permanent
        :width="getSidebarWidth"
      >
        <portal-target name="mainMenu" />
      </v-navigation-drawer>

      <!-- Bottom Navigation for Mobile -->
      <v-bottom-navigation v-if="isMobile" bg-color="primary-lighten-2">
        <!-- Cities List as Menu on Mobile -->
        <v-menu location="top center">
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Cities
              <v-icon icon="mdi-map-marker" />
            </v-btn>
          </template>
          <city-list />
        </v-menu>
      </v-bottom-navigation>

      <!-- App Bar on the top of the site -->
      <app-bar-desktop />

      <!-- Main body content: Weather forecasting -->
      <v-main class="pb-15" :class="getNavBarClass">
        <app-body />
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
  import { computed, onMounted, provide, ref } from 'vue'
  import type { ComputedRef } from 'vue'
  import { useDisplay, useTheme } from 'vuetify'
  import { useRoute } from 'vue-router'
  import { useForecastStore } from '@/stores/app'
  import { expandedWidth, minimisedWidth } from '@/config/constants'

  const { smAndDown, mdAndUp }: { smAndDown: ComputedRef<boolean>; mdAndUp: ComputedRef<boolean> } = useDisplay()
  const theme = useTheme()
  const route = useRoute()
  const { mobile: isMobile } = useDisplay()
  const forecastStore = useForecastStore()

  const drawer = ref(mdAndUp.value)
  provide('menuDrawer', drawer)

  // Computed property to determine the width of the sidebar based on route metadata
  const getSidebarWidth = computed(() => {
    // Retrieve the `hasSidebar` metadata value from the current route
    const hasSidebar: boolean = route.meta.hasSidebar

    // decide the width of the sidebar
    return hasSidebar ? expandedWidth : minimisedWidth
  })

  const getNavBarColor = computed(() => {
    return theme.current.dark ? 'primary' : 'primary-lighten-2'
  })

  const getNavBarClass = computed(() => {
    return theme.current.dark ? 'bg-primary' : 'bg-primary-lighten-2'
  })

  watch(smAndDown, (value: boolean) => {
    if (value) {
      drawer.value = false
    }
  })

  watch(mdAndUp, (value: boolean) => {
    if (value) {
      drawer.value = true
    }
  })

  onMounted(() => {
    // TODO: Implement search
    // appStore.fetchCities();
    forecastStore.fetchCityForecast('London')
  })
</script>

<style scoped>
.transition-width {
  transition: width 0.2 ease-in-out;
}
.nudge-snackbar-up :deep(.v-snack__wrapper) {
  bottom: 80px !important;
}
</style>
