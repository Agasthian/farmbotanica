import React from "react"
import styled from 'styled-components'

import Head from "../components/head"
import Layout from "../components/layout/layout"
import Form from '../components/contactus/form'
import ContactInfo from '../components/contactus/contactinfo'
import Map from '../components/map/map'
import { Container, Wrapper } from "../components/layout/element"
import {SubHeading,} from '../themes/utils'

// Location Object passed as prop to Map Component
const location = {
  address: "Farm Botanica, Chennai.",
  lat: 13.079792,
  lng: 80.209609,
}

const ContactHeading = styled.div`
  text-align:center;
  padding-bottom:2rem;
`;
const ContactHeadingMsg = styled.p`
  font-size:1.6rem;
`;

const ContactFormWrapper = styled.div`
background-color:var(--white);
padding:2rem;
border-radius:7px;
box-shadow: 0rem 0px 8px var(--shadow-color);
display:flex;
`;



const ContactPage = () => {
  return (
    <div>
      <Head title="Contact us" />
      <Layout>
        <Container>
          <Wrapper topmargin>
            <ContactHeading>
              <SubHeading>Contact Us</SubHeading>
              <ContactHeadingMsg>Any questions or remarks ? Write us a message!</ContactHeadingMsg>
            </ContactHeading>
            <ContactFormWrapper>
              <ContactInfo/>
              <Form/>
            </ContactFormWrapper>
            <Map  location={location} zoomLevel={18} />
          </Wrapper>
        </Container>
      </Layout>
    </div>
  )
}

export default ContactPage
