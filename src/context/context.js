import React, { createContext, useState } from "react"

export const UrlContext = createContext()

export const UrlProvider = ({ children }) => {
  const [url] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=8aYlfZeSF5ubAbeEcQDHSRCO3XQMjkdRmWRO3mdP"
  )
  return <UrlContext.Provider value={url}>{children}</UrlContext.Provider>
}
