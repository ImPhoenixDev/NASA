import React from "react"

export default function About() {
  return (
    <section className="about grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 text-white bg-black py-20 pt-40">
      <h2 className="about__title self-center row-start-1 row-end-2 col-start-1 col-end-2 text-center justify-center text-5xl">
        About
      </h2>
      <p className="about__description row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 px-10">
        On this page you can find a <strong>diferent image every day </strong>
        provided by <strong>NASA </strong>
        along with a description of it.
      </p>
    </section>
  )
}
