// tests/useWeatherIcon.test.ts
import { describe, expect, it } from 'vitest'
import { useWeatherIcon } from '@/composables/useWeatherIcon'

describe('useWeatherIcon', () => {
  const { getWeatherIcon } = useWeatherIcon()

  it('returns correct icon and color for clear sky', () => {
    const result = getWeatherIcon('clear sky')
    expect(result).toEqual({ icon: 'mdi-weather-sunny', colour: 'accent' })
  })

  it('returns correct icon and color for few clouds', () => {
    const result = getWeatherIcon('few clouds')
    expect(result).toEqual({ icon: 'mdi-weather-partly-cloudy', colour: 'accent' })
  })

  it('returns correct icon and color for rain', () => {
    const result = getWeatherIcon('rain')
    expect(result).toEqual({ icon: 'mdi-weather-rainy', colour: 'blue-darken-2' })
  })

  it('returns correct icon and color for thunderstorm', () => {
    const result = getWeatherIcon('thunderstorm')
    expect(result).toEqual({ icon: 'mdi-weather-lightning', colour: 'yellow-darken-4' })
  })

  it('returns default icon and color for unknown description', () => {
    const result = getWeatherIcon('unknown weather')
    expect(result).toEqual({ icon: 'mdi-weather-cloudy', colour: 'gray' })
  })

  // Add more tests as needed to cover all cases in the function
})
