import React from "react"

import Layout from "../components/layout/layout"
import Head from "../components/head"
import HomeLanding from "../components/homepage-section/homeLanding"
import About from "../components/homepage-section/aboutSection"
import Category from "../components/homepage-section/categorySection"
import Principles from "../components/homepage-section/principleSection"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <HomeLanding />
        <About />
        <Category />
        <Principles />
      </Layout>
    </div>
  )
}

export default IndexPage
