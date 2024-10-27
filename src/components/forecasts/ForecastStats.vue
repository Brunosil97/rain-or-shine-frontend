<template>
  <div class="d-flex flex-wrap align-start">
    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-chip
          class="ml-2 mb-2"
          label
          v-bind="props"
          variant="flat"
        >
          <v-icon color="accent" icon="mdi-weather-sunset-up" start />
          {{ getSunrise }}
        </v-chip>
      </template>
      Sunrise
    </v-tooltip>

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-chip
          class="ml-2 mb-2"
          label
          v-bind="props"
          variant="flat"
        >
          <v-icon color="accent" icon="mdi-weather-sunset-down" start />
          {{ getSunset }}
        </v-chip>
      </template>
      Sunset
    </v-tooltip>

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-chip
          class="ml-2 mb-2"
          v-bind="props"
          :color="uvColour"
          label
          variant="flat"
        >
          <v-icon color="accent" icon="mdi-sun-wireless" start />
          {{ uvDescription }}
        </v-chip>
      </template>
      UV
    </v-tooltip>

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-chip
          class="ml-2 mb-2"
          v-bind="props"
          :color="visibilityColour"
          label
          variant="flat"
        >
          <v-icon color="primary" icon="mdi-eye" start />
          {{ visibilityDescription }}
        </v-chip>
      </template>
      Visibility
    </v-tooltip>

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-chip
          class="ml-2 mb-2"
          label
          v-bind="props"
          variant="tonal"
        >
          <v-icon color="blue" icon="mdi-cloud-percent" start />
          {{ getHumidity }}%
        </v-chip>
      </template>
      Humidity
    </v-tooltip>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import dayjs from 'dayjs'
  import { useForecastStore } from '@/stores/app'

  const forecast = useForecastStore()
  const currentForecast = forecast.cityForecast?.current

  const getSunrise = computed(() => {
    return currentForecast?.sunrise ? dayjs.unix(currentForecast.sunrise).format('h:mm A') : '-- : --'
  })

  const getSunset = computed(() => {
    return currentForecast?.sunset ? dayjs.unix(currentForecast.sunset).format('h:mm A') : '-- : --'
  })

  const getHumidity = computed(() => {
    return currentForecast?.humidity
  })

  const uvColour = computed(() => {
    const uvi = currentForecast?.uvi ?? 0 // Default to 0 if uvi is not available

    if (uvi <= 2) return 'green'
    if (uvi <= 5) return 'yellow'
    if (uvi <= 7) return 'orange'
    if (uvi <= 10) return 'red'
    return 'purple'
  })

  const uvDescription = computed(() => {
    const uvi = currentForecast?.uvi ?? 0

    if (uvi <= 2) return 'Low'
    if (uvi <= 5) return 'Moderate'
    if (uvi <= 7) return 'High'
    if (uvi <= 10) return 'Very High'
    return 'Extreme' // Extreme UV levels
  })

  const visibilityColour = computed(() => {
    const visibility = currentForecast?.visibility ?? 0

    if (visibility < 1000) return 'red'
    if (visibility < 4000) return 'orange'
    if (visibility < 10000) return 'yellow'
    if (visibility < 20000) return 'green'
    return 'blue'
  })

  const visibilityDescription = computed(() => {
    const visibility = currentForecast?.visibility ?? 0

    if (visibility < 1000) return 'Very Poor'
    if (visibility < 4000) return 'Poor'
    if (visibility < 10000) return 'Moderate'
    if (visibility < 20000) return 'Good'
    return 'Excellent'
  })
</script>
