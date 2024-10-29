export function useWeatherIcon () {
  function getWeatherIcon (description: string) {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return { icon: 'mdi-weather-sunny', colour: 'accent' }
      case 'few clouds':
      case 'scattered clouds':
        return { icon: 'mdi-weather-partly-cloudy', colour: 'accent' }
      case 'broken clouds':
      case 'overcast clouds':
        return { icon: 'mdi-weather-cloudy', colour: 'grey' }
      case 'light rain':
      case 'drizzle':
        return { icon: 'mdi-weather-partly-rainy', colour: 'blue' }
      case 'rain':
      case 'showers':
        return { icon: 'mdi-weather-rainy', colour: 'blue-darken-2' }
      case 'heavy rain':
      case 'torrential rain':
        return { icon: 'mdi-weather-pouring', colour: 'indigo' }
      case 'thunderstorm':
        return { icon: 'mdi-weather-lightning', colour: 'yellow-darken-4' }
      case 'lightning':
        return { icon: 'mdi-weather-lightning-rainy', colour: 'amber' }
      case 'light snow':
      case 'snow showers':
        return { icon: 'mdi-weather-snowy', colour: 'light-blue lighten-4' }
      case 'heavy snow':
      case 'blizzard':
        return { icon: 'mdi-weather-snowy-heavy', colour: 'white' }
      case 'sleet':
      case 'icy rain':
        return { icon: 'mdi-weather-snowy-rainy', colour: 'blue lighten-1' }
      case 'fog':
      case 'mist':
      case 'haze':
        return { icon: 'mdi-weather-fog', colour: 'grey-darken-1' }
      default:
        return { icon: 'mdi-weather-cloudy', colour: 'grey' }
    }
  }

  return { getWeatherIcon }
}
