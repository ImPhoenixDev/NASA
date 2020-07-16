import React, { useState } from "react"
import "flatpickr/dist/themes/dark.css"

import Flatpickr from "react-flatpickr"
import "./Styles/DateSelector.styl"

export default function DateSelector() {
  const [date, setDate] = useState(null)

  function handleMouseEnter(item) {
    item.target.classList.remove("placeholder-black")
    item.target.classList.add("placeholder-white")
  }

  function handleMouseLeave(item) {
    item.target.classList.remove("placeholder-white")
    item.target.classList.add("placeholder-black")
  }

  console.log(date[0].getDate(), date[0].getMonth(), date[0].getFullYear())
  return (
    <Flatpickr
      data-eneable-time
      altFormat="d-m-y"
      value={date}
      onChange={date => {
        setDate(date)
      }}
      className="flatpickr lg:w-56 bg-transparent placeholder-black hover:bg-gray-900 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
      placeholder="Change Date"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}