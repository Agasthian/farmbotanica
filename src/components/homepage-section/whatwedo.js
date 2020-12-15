import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

import { Section, Container, Wrapper } from "../layout/element"
import { SubHeading,SubHeadingH3,SpanGreen,StyledIconButton,CenterAlign } from "../../themes/utils"
import Button from '../UI/button'

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const LeftWrapper = styled.div`
  flex : 0 0 60%;
  padding: 0 1rem;

  @media ${props => props.theme.mediaQueries.medium} {
    flex: 0 0 80%;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    flex:1;
  }
  
`
const RightWrapper = styled.div`  
flex : 1;

@media ${props => props.theme.mediaQueries.medium} {
  flex: 0 0 70%;
}
`

const ParaWrapper = styled.div`
  background-color:#f3f3f3;  
  padding:2rem 3rem;
  border-left: 8px solid var(--primary);
  border-radius: 5px;
`;

const Para = styled.p`
  
  font-weight:500;
  letter-spacing:0.5px;
  color:#000;
`;

const RightNumbersWrapper = styled.div`
  padding:10rem 3rem 0 3rem;
  color:var(--primary);

  @media ${props => props.theme.mediaQueries.smaller}{
    padding: 4rem 3rem 0 3rem;
  }
`;

const NumberFlexWrapper = styled.div`
  display:flex;
  justify-content:space-between;
`
const NumberContent = styled.div``
const Number = styled.h3`
font-size : 3.8rem;
font-weight: 600;
margin:1rem 0;
`
const NumberText = styled.p`
font-family:Poppins;
color:var(--primary);
font-weight:500;
`

const Whatwedo = () => {
  

  return (
    <Section
      id="about-me"
      fullHeight
      center
    >
      <Container>
        <Wrapper>
        <FlexWrapper>

          <LeftWrapper>
            <SubHeadingH3> What We Do </SubHeadingH3>
            <SubHeading>“The most important to a business is having <SpanGreen>Happy Clients</SpanGreen>. We give the best service”</SubHeading>
            <ParaWrapper>
              <Para><SpanGreen>Grow & Harvest </SpanGreen> agricultural, horticultural, floricultural produce that comply with internationally agreed quality standards.
              </Para>
              <Para>
              <SpanGreen>Procure</SpanGreen> the resulting high-quality produce from different Crop Focused Clusters (CFC) and aggregate in the respective processing facilities.</Para>

              <Para><SpanGreen>Process, Pack and Distribute</SpanGreen> the products - defined by their superior quality in terms of freshness, appearance, size, texture and taste - to the domestic as well as International buyers.</Para>
            </ParaWrapper>
          </LeftWrapper>

          <RightWrapper>
            <RightNumbersWrapper>
              <NumberFlexWrapper>
                <NumberContent>
                  <Number>23</Number>
                  <NumberText>Crop Focused Cluster (CFC)</NumberText>
                </NumberContent>

                <NumberContent>
                <Number>40</Number>
                  <NumberText>Processing Center</NumberText>
                </NumberContent>
              </NumberFlexWrapper>
              <NumberFlexWrapper>
                <NumberContent>
                  <Number>35</Number>
                  <NumberText>Farmer Organizations</NumberText>
                </NumberContent>

                <NumberContent>
                <Number>100+</Number>
                  <NumberText>Products Offered</NumberText>
                </NumberContent>
              </NumberFlexWrapper>
              <CenterAlign>
                <Link to="/about">
                  <Button>
                    Infrastructure Insights
                    <StyledIconButton icon={faArrowCircleRight} size="1x" />
                  </Button>
                </Link>
              </CenterAlign>
            </RightNumbersWrapper>
          </RightWrapper>
        </FlexWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Whatwedo
