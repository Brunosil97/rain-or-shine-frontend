<template>
  <v-autocomplete
    v-model="search"
    chips
    class="mt-6 ml-2"
    clearable
    density="compact"
    item-title="title"
    item-value="value"
    :items="cityOptions"
    :loading="appStore.isLoading"
    placeholder="Search Cities"
    prepend-inner-icon="mdi-magnify"
    variant="solo"
  />
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()
  const search = ref<string | object[]>([])

  // Fetch cities on mount
  onMounted(() => {
    appStore.fetchCities()
  })

  // Computed property to get only the first 10 records
  const cityOptions = computed(() => {
    return appStore.citiesData
      .filter(country => country.name && Array.isArray(country.cities) && country.cities.length > 0)
      .flatMap(country =>
        country.cities.map(city => ({
          title: `${city} (${country.name})`,
          value: city,
        }))
      )
      .slice(0, 10) // Limit to first 10 records for testing
  })
</script>
