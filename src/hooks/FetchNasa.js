import { useState, useEffect } from "react"

const HookName = URL => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    fetch(URL).then(res => setData(res))
    return data
  }, [URL])
}

export default HookName
