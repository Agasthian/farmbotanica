import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Section, Container, Wrapper } from "../layout/element"
import { SubHeading, SubHeadingH4, SubHeadingH6 } from "../../themes/utils"

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledImage = styled(BackgroundImage)`
  height: 40rem;
  width: 53rem;
  border-radius: 5px;
  overflow: hidden;
`

const ImgContentWrapper = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(rgba(97,118,127,0.0001) 0%, #084e3a5e 0%);
padding: 50px 70px;
color: #fff;
}
`

const StyledH6 = styled(SubHeadingH6)`
  margin: 0 0 15px 0;
  padding: 0 0 15px 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 24px;
  position: relative;
  font-family: Poppins;
  letter-spacing: 3px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    height: 4px;
    width: 45px;
    border-radius: 5px;
  }
`

const ImgContentBlock = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 7rem;
`

const StyledH4 = styled(SubHeadingH4)`
  font-size: 2.4rem;
  margin-bottom: 0;
`

const LinkPara = styled.p`
  color: var(--white);
  font-size: 1.8rem;
`

const PrincipleSection = () => {
  //Query Images
  const data = useStaticQuery(graphql`
    query {
      sortingImage: file(relativePath: { eq: "sorting.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      priceImage: file(relativePath: { eq: "currency.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section fullHeight style={{ backgroundColor: "white" }}>
      <Container>
        <Wrapper>
          <SubHeading>Fundamentals of Farm Botanica</SubHeading>
          <ImageWrapper>
            <StyledImage fluid={data.sortingImage.childImageSharp.fluid}>
              <ImgContentWrapper>
                <StyledH6>International Standards</StyledH6>
                <ImgContentBlock>
                  <StyledH4>Quality</StyledH4>
                  <LinkPara>Know More</LinkPara>
                </ImgContentBlock>
              </ImgContentWrapper>
            </StyledImage>

            <StyledImage fluid={data.priceImage.childImageSharp.fluid}>
              <ImgContentWrapper>
                <StyledH6>Assured Price</StyledH6>
                <ImgContentBlock>
                  <StyledH4>Price</StyledH4>
                  <LinkPara>Know More</LinkPara>
                </ImgContentBlock>
              </ImgContentWrapper>
            </StyledImage>
          </ImageWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default PrincipleSection
