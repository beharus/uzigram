import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(url)
      const res = await req.json()
      setData(res)
    }
    fetchData()
  }, [url])
  return { data }
}

export { useFetch }