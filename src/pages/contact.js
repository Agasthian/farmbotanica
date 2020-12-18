import React from "react"
import styled from 'styled-components'

import Head from "../components/head"
import Layout from "../components/layout/layout"
import Form from '../components/contactus/form'
import ContactInfo from '../components/contactus/contactinfo'

import { Container, Wrapper } from "../components/layout/element"
import {SubHeading,} from '../themes/utils'



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
flex-wrap: wrap;

@media ${props => props.theme.mediaQueries.smaller} {
  padding:1rem;
}
@media ${props => props.theme.mediaQueries.smallest} {
  padding:0rem;
}
`;



const ContactPage = () => {
  return (
    <div>
      <Head title="Contact us" />
      <Layout>
        <Container>
          <Wrapper topmargin bottommargin topmarginmobile>
            <ContactHeading>
              <SubHeading>Contact Us</SubHeading>
              <ContactHeadingMsg>Any questions or remarks ? Write us a message!</ContactHeadingMsg>
            </ContactHeading>
            <ContactFormWrapper>
              <ContactInfo/>
              <Form/>
            </ContactFormWrapper>
            
          </Wrapper>
        </Container>
      </Layout>
    </div>
  )
}

export default ContactPage
