import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon="faSpaceShuttle" />
    </div>
  )
}
