export const kelvinToFahrenheit = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32)
}

export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15)
}
