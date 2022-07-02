import useSWR from "swr"
import laggy from "~/middleware.js/laggy"

const useWeatherData = (cityId) => {
  const { data, isValidating, isLagging } = useSWR(
    cityId &&
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`,
    {
      use: [laggy],
      revalidateIfStale: true,
      revalidateOnFocus: true,
    }
  )

  return { weather: data, isValidating, isLagging }
}

export default useWeatherData
