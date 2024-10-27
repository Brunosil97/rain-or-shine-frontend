<template>
  <v-container>
    <v-row>
      <v-col class="pb-0" cols="12">
        <v-skeleton-loader
          class="d-md-block d-lg-block"
          color="transparent"
          :height="80"
          :loading="forecastStore.loadingForecast"
          type="heading"
          width="100%"
        >
          <page-title show-underline :title="getTitle" />

          <div class="d-flex flex-wrap align-start">
            <forecast-stats />
          </div>
        </v-skeleton-loader>
      </v-col>
    </v-row>

    <error-message
      v-if="hasError"
      :error="forecastStore.forecastError"
      retry
      @retry="setActiveCity(getTitle)"
    />

    <v-row>
      <v-col cols="12">
        <v-skeleton-loader
          v-if="!hasError"
          class="d-md-block d-lg-block"
          color="transparent"
          :height="80"
          :loading="forecastStore.loadingForecast"
          type="sentences"
        >
          <forecast-overview />
        </v-skeleton-loader>
      </v-col>
    </v-row>

    <portal to="mainMenu">
      <v-divider />
      <h6 class="text-h6 mt-5 pl-1">Forecast Overview</h6>
      <v-divider class="mt-2" />
      <city-list />
    </portal>
  </v-container>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useForecastStore } from '@/stores/app'
  import ErrorMessage from '@/components/errors/ErrorMessage.vue'
  import { useCityForecast } from '@/composables/useCityForecast'

  const forecastStore = useForecastStore()

  const getTitle = computed(() => {
    return forecastStore.city
  })

  const hasError = computed(() => {
    return forecastStore.forecastError
  })

  const { setActiveCity } = useCityForecast()

</script>
