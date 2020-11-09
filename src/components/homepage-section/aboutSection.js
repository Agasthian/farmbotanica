import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

import { Section, Container } from "../layout/element"
import StyledButton from "../UI/button"
import { SubHeading,StyledIconButton } from "../../themes/utils"

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const AboutImg = styled(Img)`
  width: 75rem;
`
const AboutTextWrapper = styled.div`
  width: 35rem;
`

const About = () => {
  //Querying img
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Website_Image_OpenSans.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section
      id="about-me"
      fullHeight
      center
      style={{ backgroundColor: "white" }}
    >
      <Container>
        <FlexWrapper>
          <AboutImg
            fluid={data.file.childImageSharp.fluid}
            alt="About Process"
          />
          <AboutTextWrapper>
            <SubHeading>What does Farm Botanica do?</SubHeading>
            <p>
            Procure high quality agro products from our farms and farmers, belonging to their respective Crop Focused Cluster (CFC) of farming villages established across India.</p>

            <p>Process, pack and distribute the products - defined by their superior quality in terms of freshness, appearance, size, texture and taste - to the domestic as well as International buyers.</p>
            <Link to="/about">
              <StyledButton>
                More <StyledIconButton icon={faArrowCircleRight} size="1x" />
              </StyledButton>
            </Link>
          </AboutTextWrapper>
        </FlexWrapper>
      </Container>
    </Section>
  )
}

export default About
