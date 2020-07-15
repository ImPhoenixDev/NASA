import React, { useEffect, useState } from "react"
import { document, window } from "browser-monads"
import fetchNasa from "../components/fetchNasa"

import Layout from "../components/layout"
import Planet from "../components/Planet"
import SEO from "../components/seo"
import Media from "../components/Media"

import "./main.styl"
import "./animations.styl"
import About from "../components/About"

export default function IndexPage() {
  const API_URL =
    "https://api.nasa.gov/planetary/apod?api_key=8aYlfZeSF5ubAbeEcQDHSRCO3XQMjkdRmWRO3mdP"

  var data = fetchNasa(API_URL)
  const [animableItems, setAnimableItems] = useState([])

  var target = document.getElementsByClassName("waiting-animation")

  var options = {
    rootMargin: "0px 150% 0px 100%",
    threshold: 0.5,
  }

  const callback = (entries, observer) => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.remove("waiting-animation")
        item.target.classList.add("animated")
      }
    })
  }

  const observer = new window.IntersectionObserver(callback, options)

  Array.prototype.forEach.call(animableItems, child => {
    observer.observe(child)
  })
  useEffect(() => {
    var target = document.getElementsByClassName("waiting-animation")
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
        </div>
        <div
          id="intro__image"
          className="image flex align-middle image--right col-start-2 col-end-3 "
        >
          <Planet />
        </div>
      </section>
      <About />
      {data && (
        <section className="hero grid h-full text-center bg-black text-white font-body lg:px-56">
          <div className="hero-general-data row-start-1 row-end-2 col-start-1 col-end-2 flex items-start py-20 flex-col lg:mb-32">
            <div className="hero__title mb-16 self-center font-title text-2xl waiting-animation transition-all duration-200">
              {data.title}
            </div>
            <div className="hero__copy my-4 ml-10 waiting-animation transition-all duration-700">
              <div class="border-l-4 border-white  p-4">
                <p class="font-bold text-left">Copyright:</p>
                <p>
                  {data.copyright}
                  {data.copyright === undefined && "Not avaliable"}
                </p>
              </div>
            </div>
            <div className="hero__date my-4 ml-10 waiting-animation transition-all duration-700">
              <div class="border-l-4 border-white p-4">
                <p class="font-bold text-left">Date:</p>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
          <div className="hero__image row-start-2 row-end-3 col-start-1 col-end-2 mx-10 rounded-sm overflow-hidden waiting-animation transition-all duration-700">
            {data.media_type && (
              <Media type={data.media_type} url={data.url} title={data.title} />
            )}
          </div>
          <div className="hero__desc row-start-3 row-end-4 col-start-1 col-end-2 flex text-left mx-10 my-24 leading-snug waiting-animation transition-all duration-700">
            {data.explanation}
          </div>
        </section>
      )}
    </Layout>
  )
}
