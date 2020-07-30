import React, { useState, useEffect } from "react"

let URLContext = React.createContext()
let { Provider, Consumer } = URLContext

function URLProvider({ children }) {
  let [url, setUrl] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=8aYlfZeSF5ubAbeEcQDHSRCO3XQMjkdRmWRO3mdP"
  )

  return <Provider value={url}>{children}</Provider>
}

export { URLProvider, Consumer as URLConsumer, URLContext }
