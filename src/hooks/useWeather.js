import { useState } from "react"
import useSWR from "swr"
import fetcher from "~/utils/fetcher"

const useWeather = () => {
  const [city, setCity] = useState({
    id: 4180439,
    name: "Atlanta",
    state: "GA",
    country: "US",
    coord: {
      lon: -84.387978,
      lat: 33.749001,
    },
  })

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
    fetcher
  )

  return { weather: data, city, setCity, error }
}

export default useWeather
