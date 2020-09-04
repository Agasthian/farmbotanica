import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { Container, Content } from "../themes/utils"

const MainHeading = styled.h1`
  color: var(--primary);
  font-size: 2em;
  margin: 0;
  font-weight: 700;
`
const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Content>
            <MainHeading>Under Construction</MainHeading>
          </Content>
        </Container>
      </Layout>
    </div>
  )
}

export default ContactPage
