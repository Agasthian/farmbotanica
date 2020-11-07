import React from "react"

import Head from "../components/head"
import Layout from "../components/layout/layout"
import { Container, Wrapper } from "../components/layout/element"
import Form from '../components/contactus/form'
import Map from '../components/map/map'

// Location Object passed as prop to Map Component
const location = {
  address: "Stacked Boxes Architecture, Chennai.",
  lat: 13.079792,
  lng: 80.209609,
}

const ContactPage = () => {
  return (
    <div>
      <Head title="Contact us" />
      <Layout>
        <Container>
          <Wrapper topmargin>
            <h1>Contact Us</h1>
            <Form/>
            <Map  location={location} zoomLevel={18} />
          </Wrapper>
        </Container>
      </Layout>
    </div>
  )
}

export default ContactPage
