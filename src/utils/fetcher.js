const fetcher = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error("Failed to retrieve data.")
    error.status = res.status
    throw error
  }

  return res.json()
}

export default fetcher
