import { exact, number, shape, string } from "prop-types"

export const city = shape({
  id: number.isRequired,
  name: string.isRequired,
  state: string,
  country: string.isRequired,
  coord: exact({
    lon: number.isRequired,
    lat: number.isRequired,
  }),
})
