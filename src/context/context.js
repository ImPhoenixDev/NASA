import React, { createContext, useState } from "react"

export const UrlContext = createContext()

export const UrlProvider = ({ children }) => {
  const base =
    "https://api.nasa.gov/planetary/apod?api_key=8aYlfZeSF5ubAbeEcQDHSRCO3XQMjkdRmWRO3mdP&date="
  const [url, setUrl] = useState(base)

  function setDay(y, m, d) {
    setUrl(base + y + "-" + m + "-" + d)
  }
  // function actualDay(y, m, d) {
  //  setUrl(base + y + "-" + m + "-" + d)
  //  }

  return (
    <UrlContext.Provider value={{ url, setDay }}>
      {children}
    </UrlContext.Provider>
  )
}
