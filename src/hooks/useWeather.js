import useSWR from "swr"

const useWeather = (cityId) => {
  const { data, isValidating } = useSWR(
    cityId &&
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
    }
  )

  return { weather: data, isValidating }
}

export default useWeather
