import React from 'react'
import styled from "styled-components"

import farmerImg from "../../images/farmer.svg"
import { Section, Container, Wrapper } from "../layout/element"
import { SubHeading,SubHeadingH3 } from "../../themes/utils"


const SubHeadingh3 = styled(SubHeadingH3)`
  font-weight:400;
  font-size:1.6rem;
  `
const StyledImg = styled.img`
  width: 35rem;
  @media ${props => props.theme.mediaQueries.medium} {
    width:50rem;
  }
`;

const FlexWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
`;

const ImgWrapper = styled.div`
flex: 0 0 40%;
`
const ContentWrapper = styled.div`
flex: 1;

@media ${props => props.theme.mediaQueries.medium} {
  flex: 0 0 70%;
  
}
`

const ContentBox = styled.div`
padding: 0.5rem 2rem;
margin:1.5rem;
border-radius: 7px;
box-shadow: 0rem 0.5rem 1.5rem rgb(0 0 0 / 10%);
`;
const ContentHeading = styled.h4`
margin: 2rem 0 0 0;
`;
const ContentPara = styled.p`

`;

const WhyChooseUs = () => {

  return (
    <Section fullHeight topmargin>
      <Container>
        <Wrapper>
         
          <FlexWrapper>

            <ImgWrapper>
              <SubHeading>Why Choose us</SubHeading>
              <SubHeadingh3>Doing the right thing at the right time.</SubHeadingh3>
              <StyledImg src={farmerImg}/>        
            </ImgWrapper>

            <ContentWrapper>
              <ContentBox>
                <ContentHeading>Multi-Layered Quality assessment and management</ContentHeading>
                <ContentPara>Products undergo quality checking before and after processing to assess the difference in quality. Another 	layer of quality inspection and quarantine check happens right before packaging.</ContentPara>
              </ContentBox>
              <ContentBox>
                <ContentHeading>Handling Efficiency</ContentHeading>
                <ContentPara>We work with farmers, up and all the way until the products reach their shipment destinations. In order to 	conserve the natural resources, Farm Botanica strives hard to minimize post-harvest losses and wastage. </ContentPara>
              </ContentBox>
              <ContentBox>
                <ContentHeading>Timely Delivery </ContentHeading>
                <ContentPara>Effective time management and swift delivery has always been our forte.</ContentPara>
              </ContentBox>
            </ContentWrapper>

          </FlexWrapper>

        </Wrapper>
      </Container>
    </Section>
  )
}

export default WhyChooseUs
