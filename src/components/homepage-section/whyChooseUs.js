import React from 'react'
import styled from "styled-components"

import farmerImg from "../../images/farmer.svg"
import { Section, Container, Wrapper } from "../layout/element"
import { SubHeading,SubHeadingH3,SpanGreen } from "../../themes/utils"


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
              <SubHeadingH3>Why Choose us  </SubHeadingH3>
              <SubHeading>“Doing the <SpanGreen> right thing </SpanGreen> at the right time”</SubHeading>
              <StyledImg src={farmerImg}/>        
            </ImgWrapper>

            <ContentWrapper>
              <ContentBox>
                <ContentHeading><SpanGreen> “Multi-Layered Quality Assessment and Management” </SpanGreen> </ContentHeading>
                <ContentPara>QCs before and after processing to assess the difference in quality. Another layer of <b> “Quality Inspection” </b>and <b>“Quarantine Check” </b> happens right before packaging.</ContentPara>
              </ContentBox>
              <ContentBox>
                <ContentHeading><SpanGreen>“Infrastructure and Process Capacity”</SpanGreen></ContentHeading>
                <ContentPara>Equipped with high end facilities to <b> “Process Multiple Crops in Parallel” </b> at any given point in time and also capable of handling more than few <b>“100s of MTs per day”</b> </ContentPara>
              </ContentBox>
              <ContentBox>
                <ContentHeading><SpanGreen>“Safe Packaging & Timely Delivery” </SpanGreen> </ContentHeading>
                <ContentPara>Quality packaging for safe transportation of goods, coupled with Excellent Cold Chain for perishables. <b> “Effective time management and swift delivery has always been our forte”</b> </ContentPara>
              </ContentBox>
            </ContentWrapper>

          </FlexWrapper>

        </Wrapper>
      </Container>
    </Section>
  )
}

export default WhyChooseUs
