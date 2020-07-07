import { useEffect, useState } from "react"

const FetchNasa = API_URL => {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(Response => Response.json())
      .then(data => setNasaData({ ...data }))
  }, [API_URL])

  return nasaData
}

export default FetchNasa
