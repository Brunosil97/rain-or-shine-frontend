<template>
  <v-card class="mx-auto">
    <v-card-item>
      <template #subtitle>
        <v-icon class="me-1 pb-1" color="info" icon="mdi-alert-box" size="18" />
        {{ weatherAlert }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="6">
          {{ currentTemp }}°C
        </v-col>
        <v-col class="text-right" cols="6">
          <v-icon
            :color="currentWeatherColour"
            :icon="currentWeatherIcon"
            size="88"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="ml-2" cols="6">
          Feels like: {{ feelsLikeTemp }}°C
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        :subtitle="`${windSpeed} km/h`"
      >
        <template #append>
          <v-icon color="blue" icon="mdi-weather-windy" />
        </template>
      </v-list-item>

      <v-list-item
        density="compact"
        :subtitle="`${chanceOfRain}%`"
      >
        <template #append>
          <v-icon color="blue" icon="mdi-weather-pouring" />
        </template>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div>
        <div class="py-2">
          <v-slider
            v-model="time"
            class="mx-4"
            color="primary-lighten-2"
            density="compact"
            hide-details
            :max="getMax - 1"
            show-ticks="always"
            :step="1"
            thumb-size="10"
          />
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="(item, index) in visibleForecast"
            :key="index"
            :subtitle="item.temp"
            :title="item.day"
          >
            <template #append>
              <v-icon :color="item.colour" :icon="item.icon" />
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useForecastStore } from '../../stores/app' // Assuming your store is located here
  import { useWeatherIcon } from '@/composables/useWeatherIcon'

  const { getWeatherIcon } = useWeatherIcon()
  const store = useForecastStore()

  const getMax = computed(() => store.cityForecast?.daily?.length)
  const time = ref(getMax.value)

  // Computed properties to retrieve data from the store
  const currentTemp = computed(() => Math.trunc(store.cityForecast.current.temp))
  const windSpeed = computed(() => Math.round(store.cityForecast.current.wind_speed))
  const chanceOfRain = computed(() => Math.trunc(store.cityForecast.daily[0].pop * 100))
  const feelsLikeTemp = computed(() => Math.trunc(store.cityForecast.current.feels_like))

  // Processed daily forecast data with weekday name, icon, color, and rounded temperatures
  const dailyForecast = computed(() =>
    store.cityForecast?.daily.map(day => ({
      // Full weekday name from timestamp (e.g., "Monday")
      day: new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
      // Icon and color based on weather description
      icon: getWeatherIcon(day.weather[0].description).icon,
      colour: getWeatherIcon(day.weather[0].description).colour,
      // Rounded temperatures, formatted as "Day: XX° / Night: XX°"
      temp: `Day: ${Math.trunc(day.temp.day)}° / Night: ${Math.trunc(day.temp.night)}°`,
    }))
  )

  // Show forecast items up to the selected day on the slider
  const visibleForecast = computed(() => dailyForecast.value.slice(0, time.value + 1))

  const weatherAlert = computed(() => {
    const weather = store.cityForecast.current.weather[0]
    return `${weather.main} : ${weather.description}`
  })

  const currentWeatherIcon = computed(() => {
    const description = store.cityForecast.current.weather[0].description
    return getWeatherIcon(description).icon
  })

  const currentWeatherColour = computed(() => {
    const description = store.cityForecast.current.weather[0].description
    return getWeatherIcon(description).colour
  })
</script>

<style scoped>
.leave-room {
  max-height: 80dvh;
  overflow-y: auto;
}
</style>
