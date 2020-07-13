import React from "react"

export default function Media(props) {
  if (props.type === "image") {
    return <img src={props.url} alt={props.title} />
  } else if (props.type === "video") {
    return (
      <iframe
        src={props.url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        className="w-full h-6/10vh "
      ></iframe>
    )
  }
}
