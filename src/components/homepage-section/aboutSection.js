import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Section, Container } from "../layout/element"
import StyledButton from "../UI/button"

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const AboutImg = styled(Img)`
  width: 50rem;
`
const AboutTextWrapper = styled.div`
  width: 50rem;
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
    <Section fullHeight id="about" style={{ backgroundColor: "white" }}>
      <Container>
        <FlexWrapper>
          <AboutImg
            fluid={data.file.childImageSharp.fluid}
            alt="About Process"
          />
          <AboutTextWrapper>
            <h1>About Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              illum repellat ratione quos nisi magni dignissimos placeat enim
              quasi tenetur, ducimus ab, explicabo incidunt aperiam id
              laudantium ipsum voluptatibus voluptate.
            </p>
            <Link to="/about">
              <StyledButton>More</StyledButton>
            </Link>
          </AboutTextWrapper>
        </FlexWrapper>
      </Container>
    </Section>
  )
}

export default About
