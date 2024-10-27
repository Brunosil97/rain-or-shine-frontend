<template>
  <v-list>
    <v-list-item
      v-for="city in favoriteCities"
      :key="city"
      :active="city === forecastStore.city"
      :active-class="'bg-accent'"
      class="my-1"
      rounded="lg"
      :title="city"
      @click="setActiveCity(city)"
    />
  </v-list>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useForecastStore } from '@/stores/app'
  import { useCityForecast } from '@/composables/useCityForecast'

  const forecastStore = useForecastStore()

  const favoriteCities = ref(['London', 'Porto', 'New York City', 'Istanbul', 'Cape Town'])

  const { setActiveCity } = useCityForecast()
</script>
