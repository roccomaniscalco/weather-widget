import useSWR from "swr"
import fetcher from "~/utils/fetcher"

const useWeather = (lat, lon) => {
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
    fetcher
  )

  return { weather: data, error }
}

export default useWeather
