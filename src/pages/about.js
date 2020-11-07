import React from "react"
import styled from 'styled-components'

import Head from "../components/head"
import Layout from "../components/layout/layout"
import { Container } from "../components/layout/element"
import AboutPane1 from '../components/aboutus/aboutpane1'
import Aboutpane2 from '../components/aboutus/aboutpane2'
import Aboutpane3 from '../components/aboutus/aboutpane3'
import Aboutpane4 from '../components/aboutus/aboutpane4'

const PageBG = styled.div`
background-color:#fff;
`

const AboutPage = () => {
  return (
    <PageBG>
      <Head title="About Us" />
      <Layout>
        <AboutPane1/>
        <Container style={{padding :"0 8rem"}}>
          <Aboutpane2/>
          <Aboutpane3/>
          <Aboutpane4/>
        </Container>
      </Layout>
    </PageBG>
  )
}

export default AboutPage
