import { node } from "prop-types"
import { SWRConfig } from "swr"

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
  suspense: true,
}

const SwrConfigProvider = ({ children }) => {
  return <SWRConfig value={options}>{children}</SWRConfig>
}

SwrConfigProvider.propTypes = {
  children: node,
}

export default SwrConfigProvider
