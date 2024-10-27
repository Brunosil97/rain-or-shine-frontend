<template>
  <v-card class="mx-auto" max-height="400">
    <!-- Card Header with Title -->
    <v-card-item class="bg-primary-lighten-2 text-white">
      <v-card-title>Hourly Forecast</v-card-title>
    </v-card-item>

    <v-virtual-scroll
      height="400"
      item-height="50"
      :items="filteredForecast"
    >
      <template #default="{ item }">
        <v-list-item
          :subtitle="`${Math.trunc(item.temp)}°C - ${item.weather[0].description}`"
          :title="formatTime(item.dt)"
        >
          <template #append>
            <v-icon
              :color="getWeatherIcon(item.weather[0].description).colour"
              :icon="getWeatherIcon(item.weather[0].description).icon"
            />
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import dayjs from 'dayjs'
  import { useForecastStore } from '@/stores/app'
  import { useWeatherIcon } from '@/composables/useWeatherIcon'

  const { getWeatherIcon } = useWeatherIcon()
  const forecastStore = useForecastStore()

  // Filter forecast data to include only today’s entries
  // starting from the current hour and stopping at 5:00 AM the next day
  const filteredForecast = computed(() => {
    const now = dayjs()
    const cutoffTime = now.add(1, 'day').hour(5).minute(0).second(0)

    return forecastStore.cityForecast?.hourly.filter(item => {
      const itemTime = dayjs.unix(item.dt)
      return itemTime.isAfter(now) && itemTime.isBefore(cutoffTime)
    })
  })

  /**
   * Formats a Unix timestamp to a human-readable time format.
   *
   * This function takes a Unix timestamp (in seconds) and converts it to
   * a string representing the time in "h:mm A" format, e.g., "2:30 PM".
   *
   * @param {number} dt - The Unix timestamp in seconds.
   * @returns {string} The formatted time as a string.
   */
  function formatTime (dt: number) {
    return dayjs.unix(dt).format('h:mm A')
  }
</script>
