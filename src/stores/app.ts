// stores/appStore.ts
import { defineStore } from 'pinia'

// Define the structure for a city object
interface CityData {
  name: string;
  cities: string[];
}

interface AppState {
  isLoading: boolean;
  isError: boolean;
  citiesData: CityData | [];
}

interface ForecastState {
  cityForecast: Array<any>; // Adjust the type based on the structure of forecast data if available
  loadingForecast: boolean;
  forecastError: string | null;
  city: string;
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isLoading: false,
    isError: false,
    citiesData: [],
  }),
  actions: {
    async fetchCities () {
      this.isLoading = true
      this.isError = false

      try {
        const response = await fetch('http://localhost:8000/cities') // Replace with your API URL
        const { data } = await response.json()

        if (response.ok) {
          this.citiesData = data
        }
      } catch (error) {
        this.isError = error
      } finally {
        this.isLoading = false
      }
    },
  },
})

export const useForecastStore = defineStore('forecast', {
  state: (): ForecastState => ({
    cityForecast: [],
    loadingForecast: false,
    forecastError: null,
    city: '',
  }),
  getters: {
    // Getter to retrieve the current forecast
    currentForecast: state => {
      return state.cityForecast?.current ?? {}
    },
  },
  actions: {
    async fetchCityForecast (city: string) {
      this.city = city
      this.loadingForecast = true
      this.forecastError = null

      try {
        const response = await fetch(`http://localhost:8000/weather?city=${city}`)
        const data = await response.json()
        if (!response.ok) {
          // If response is not OK, try to extract error message as plain text
          const errorMessage = await response.text()
          this.forecastError = errorMessage || 'Failed to fetch forecast data from backend'
          return
        }

        if (response.ok) {
          // Assuming your backend API returns a list of forecasts with date, temperature, and description
          this.cityForecast = data
        }
      } catch (error) {
        this.forecastError = error
      } finally {
        this.loadingForecast = false
      }
    },
  },
})
