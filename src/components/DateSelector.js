import React, { useState, useEffect, useContext } from "react"
import "flatpickr/dist/themes/dark.css"

import Flatpickr from "react-flatpickr"
import "./Styles/DateSelector.styl"

import { UrlContext } from "../context/context"

export default function DateSelector() {
  const [date] = useState(null)
  const urlData = useContext(UrlContext)

  function handleMouseEnter(item) {
    item.target.classList.remove("placeholder-black")
    item.target.classList.add("placeholder-white")
  }

  function handleMouseLeave(item) {
    item.target.classList.remove("placeholder-white")
    item.target.classList.add("placeholder-black")
  }

  var handleSetDate = () => {}

  if (urlData !== undefined) {
    handleSetDate = date => {
      urlData.setDay(
        date[0].getFullYear(),
        date[0].getMonth(),
        date[0].getDate()
      )
    }
  }
  useEffect(() => {
    //  console.log(date[0].getDate(), date[0].getMonth(), date[0].getFullYear())
  }, [])
  return (
    <Flatpickr
      data-eneable-time
      altFormat="y-m-d"
      value={date}
      onChange={date => {
        handleSetDate(date)
      }}
      className="flatpickr my-6 w-40 md:w-56 lg:w-40 bg-transparent plajceholder-black hover:bg-gray-900 text-gray-900 font-semibold hover:text-white py-2 lg:py-1 px-4 lg:my-4 border border-gray-900 hover:border-transparent rounded lg:text-base text-center waiting-animarion transition-all duration-200"
      placeholder="Change Date"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}
