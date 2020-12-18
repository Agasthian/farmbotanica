import React from 'react'
import styled from 'styled-components'

import aboutHero from '../../images/about1.png'
import {SubHeading,CenterAlign,SpanGreen,FlexWrapper,FlexLeft,FlexRight} from '../../themes/utils'


const StyledImage = styled.img`
width:40rem;

@media ${props => props.theme.mediaQueries.smaller} {
  width: 40rem;
}

@media ${props => props.theme.mediaQueries.smallest} {
  width: 32rem;
}
`


const AboutPane1 = () => {
  return (
    <>
      <CenterAlign>
        <SubHeading style={{textAlign : "center", marginTop:"6rem", fontSize: "2.6rem", marginBottom:"0"}}>We’re <SpanGreen> globally local</SpanGreen> – we call it <br/><SpanGreen> Glocal </SpanGreen> </SubHeading>
      </CenterAlign>
      <p>Farm Botanica applies the principles of Demand Driven Supply Chain in combination with the Farm toBusiness strategy to procure, process and distribute the fresh produce. It helps us in:</p>
      <FlexWrapper>
        <FlexLeft>
          <StyledImage src={aboutHero}/>
        </FlexLeft>
        <FlexRight>
          <h5 style={{marginBottom : "1rem"}}>Handling sudden spike or drop in demand without disrupting the supply schedules.</h5> <br/>
          <h5 style={{marginBottom : "1rem"}}>Forecasting and regulating market conditions to make sure farmers always get the right compensation.</h5> <br/>
          <h5>Retaining freshness in the produce and ensure longevity in storage.</h5>   <br/>
          <h5>Achieving visibility in demand and supply levels throughout the supply chain.</h5>  <br/>
          <h5>Reducing post-harvest loss and the need to step up production significantly to compensate the loss.</h5> <br/>
        </FlexRight>
      </FlexWrapper>
      
    </>
  )
}

export default AboutPane1
