import React from "react"

export default function About() {
  return (
    <section className="about grid grid-cols-2 grid-rows-1 text-white bg-black py-20 pt-40">
      <h2 className="about__title self-center col-start-1 col-end-2 text-center justify-center text-5xl">
        About
      </h2>
      <p className="about__description col-start-2 col-end-3 pr-20">
        On this page you can find a <strong>diferent image every day </strong>
        provided by <strong>NASA </strong>
        along with a description of it.
      </p>
    </section>
  )
}
