import { node } from "prop-types"
import { SWRConfig } from "swr"
import fetcher from "~/utils/fetcher"

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
  fetcher,
}

const SwrConfigProvider = ({ children }) => {
  return <SWRConfig value={options}>{children}</SWRConfig>
}

SwrConfigProvider.propTypes = {
  children: node,
}

export default SwrConfigProvider
