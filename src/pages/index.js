import React from "react"
import { Link } from "gatsby"
import fetchNasa from "../components/fetchNasa"

import Layout from "../components/layout"
import Planet from "../components/Planet"
import SEO from "../components/seo"

export default function IndexPage() {
  const API_URL =
    "https://api.nasa.gov/planetary/apod?api_key=8aYlfZeSF5ubAbeEcQDHSRCO3XQMjkdRmWRO3mdP"
  var data = fetchNasa(API_URL)
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="home grid w-full h-fullvh pl-16 py-40 grid-cols-2 grid-rows-1">
        <div className="intro grid col-start-1 col-end-2 content-center">
          <div className="intro-title text-3xl font-bold">NASA Daily Image</div>
          <div className="intro-subtitle">Visit every day</div>
        </div>
        <div className="image flex align-middle image--right col-start-2 col-end-3">
          <Planet />
        </div>
      </section>

      <section className="hero">
        <div className="hero-title"></div>
        <div className="hero-subtitle"></div>
        <img src="" alt="" />
      </section>
    </Layout>
  )
}
