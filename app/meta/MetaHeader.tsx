import React from "react"
import { loadWebComponent } from "../web-component"

loadWebComponent() // defineComponents()

let inlinedStyles = ""
if (process.env.NODE_ENV === "production") {
  try {
    // @ts-ignore
    inlinedStyles = [
      // require("!raw-loader!../public/styles.css")
      // require("!raw-loader!prism-themes/themes/prism-atom-dark.css")
    ].join("")
    console.log("inline", inlinedStyles)
  } catch (e) {
    console.log("inline", e)
  }
}

export const MetaHeader = props => {
  let css

  if (process.env.NODE_ENV === "production") {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: inlinedStyles }}
      />
    )
  }
  return (
    <head>
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.6/build/styles/atom-one-dark.min.css"
      />
      {/* <link
        rel="stylesheet" //href="https://unpkg.com/prismjs@1.13.0/themes/prism-okaidia.css"
        href="https://unpkg.com/prism-github@1.1.0/prism-github.css"
      /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@terrierscript" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {props.headComponents}
      <link rel="shortcut icon" />
      {css}
    </head>
  )
}
