import React from "react"
import styled from "styled-components"

import { Section, Container, Wrapper } from "../layout/element"
import { SubHeading,SubHeadingH3 } from "../../themes/utils"

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const LeftWrapper = styled.div`
  flex : 0 0 50%;
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

const SubHeadingh3 = styled(SubHeadingH3)`
  font-weight:400;
  font-size:1.6rem;
  width:80%;
`

const ParaWrapper = styled.div`
  background-color:#F2F9FF;  
  padding:2rem 4rem;
  border-left: 8px solid #4B29B1;
  border-radius: 5px;
`;

const ItalicPara = styled.p`
  font-style:italic;
  font-weight:500;
  letter-spacing:0.5px;
  color:#000;
`;

const RightNumbersWrapper = styled.div`
  padding:10rem 3rem 0 3rem;

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
color:grey;
font-weight:600;
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
            <SubHeading>What we do</SubHeading>
            <SubHeadingh3>The most important to a business is having Happy Clients. We give the best service.</SubHeadingh3>
            <ParaWrapper>
              <ItalicPara>
              Procure high quality agro products from our farms and farmers, belonging to their respective Crop Focused Cluster (CFC) of farming villages established across India.</ItalicPara>

              <ItalicPara>Process, pack and distribute the products - defined by their superior quality in terms of freshness, appearance, size, texture and taste - to the domestic as well as International buyers.</ItalicPara>
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
            </RightNumbersWrapper>
          </RightWrapper>
        </FlexWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Whatwedo
