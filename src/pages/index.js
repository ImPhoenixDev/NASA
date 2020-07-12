import React, { useEffect, useState } from "react"
import { document, window } from "browser-monads"
import fetchNasa from "../components/fetchNasa"

import Layout from "../components/layout"
import Planet from "../components/Planet"
import SEO from "../components/seo"

import "./main.styl"
import "./animations.styl"

export default function IndexPage() {
  const API_URL =
    "https://api.nasa.gov/planetary/apod?api_key=8aYlfZeSF5ubAbeEcQDHSRCO3XQMjkdRmWRO3mdP&date=2020-07-11"

  var data = fetchNasa(API_URL)

  const [animableItems, setAnimableItems] = useState([])

  var target = document.getElementsByClassName("waiting-animation")

  var options = {
    rootMargin: "0px 101% 0px 101%",
    threshold: 1.0,
  }

  const callback = (entries, observer) => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.remove("awaiting-animation")
        item.target.classList.add("animated")
      }
    })
  }

  const observer = new window.IntersectionObserver(callback, options)

  Array.prototype.forEach.call(animableItems, child => {
    console.log(child)
    observer.observe(child)
  })
  useEffect(() => {
    setAnimableItems(target)
  }, [target])

  return (
    <Layout>
      <SEO title="Home" />
      <section className="home grid w-full h-fullvh pl-16 py-40 grid-cols-2 grid-rows-1 font-body">
        <div className="intro grid col-start-1 col-end-2 content-center waiting-animation">
          <div
            id="intro__title"
            className="intro__title text-3xl font-bold font-title leading-none waiting-animation transition-all duration-700"
          >
            NASA Daily Image
          </div>
          <div className="intro__subtitle my-3 waiting-animation transition-all duration-700">
            Come daily{" "}
            <span role="img" aria-label="smile">
              🌠😀
            </span>
          </div>
        </div>
        <div
          id="intro__image"
          className="image flex align-middle image--right col-start-2 col-end-3 "
        >
          <Planet />
        </div>
      </section>

      {data && (
        <section className="hero grid h-full text-center bg-black text-white font-body">
          <div className="hero-general-data row-start-1 row-end-2 col-start-1 col-end-2 flex items-start  py-20 flex-col">
            <div className="hero__title mb-16 self-center font-title text-2xl waiting-animation transition-all duration-700">
              {data.title}
            </div>
            <div className="hero__copy my-4 ml-10 waiting-animation transition-all duration-700">
              Copyright: {data.copyright}
              {data.copyright === undefined && "Not avaliable"}
            </div>
            <div className="hero__date my-4 ml-10 waiting-animation transition-all duration-700">
              Date: {data.date}
            </div>
            <div className="btn btn-blue my-10 mx-10 waiting-animation transition-all duration-700">
              Change date
            </div>
          </div>
          <img
            src={data.url}
            alt={data.title}
            className="hero__image row-start-2 row-end-3 col-start-1 col-end-2 px-10 rounded-sm waiting-animation transition-all duration-700 "
          />
          <div className="hero__desc row-start-3 row-end-4 col-start-1 col-end-2 flex text-left mx-10 my-24 leading-snug waiting-animation transition-all duration-700">
            {data.explanation}
          </div>
        </section>
      )}
    </Layout>
  )
}
