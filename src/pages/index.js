import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import HomeLanding from "../components/homepage-section/homeLanding"


const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <HomeLanding />
      </Layout>
    </div>
  )
}

export default IndexPage
