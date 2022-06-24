import useSWR from "swr"
import laggy from "~/middleware.js/laggy"
import fetcher from "~/utils/fetcher"

const useWeather = (cityId) => {
  const { data, isLagging } = useSWR(
    () =>
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`,
    fetcher,
    { use: [laggy] }
  )

  return { weather: data, isLagging }
}

export default useWeather
