<template>
  <v-app-bar
    class="pa-1"
    :color="getAppBarColor"
    density="comfortable"
    flat
    location="top"
  >
    <v-app-bar-title>Rise or Shine: Weather Forecasting</v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  const getAppBarColor = computed(() => {
    return theme.current.dark ? 'primary' : 'primary-lighten-2'
  })
</script>
