import React from "react"

import Layout from "../components/layout/layout"
import Head from "../components/head"
import HomeLanding from "../components/homepage-section/homeLanding"
import Whatwedo from "../components/homepage-section/whatwedo"
import Category from "../components/homepage-section/categorySection"
import Principles from "../components/homepage-section/principleSection"
import Howwework from '../components/homepage-section/howWeWork'
import WhyChooseUs from '../components/homepage-section/whyChooseUs'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <HomeLanding />
        <Whatwedo />
        <Category />
        <Howwework/>
        <WhyChooseUs/>
        
      </Layout>
    </div>
  )
}

export default IndexPage
