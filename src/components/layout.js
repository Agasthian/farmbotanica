import React from "react"

import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"

const Layout = props => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
