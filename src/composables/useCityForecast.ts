import { useForecastStore } from '@/stores/app'

export function useCityForecast () {
  const forecastStore = useForecastStore()

  /**
   * Sets the active city and fetches its forecast data.
   *
   * This function updates the `city` state in `forecastStore` to the provided city name
   * and then triggers a fetch action to retrieve the weather forecast for that city.
   *
   * @param {string} city - The name of the city to set as active and fetch forecast data for.
   */
  function setActiveCity (city: string) {
    forecastStore.city = city
    forecastStore.fetchCityForecast(city)
  }

  return {
    setActiveCity,
  }
}
