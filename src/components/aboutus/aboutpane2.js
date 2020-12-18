import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"

import {SubHeading,SpanGreen,CenterAlign} from '../../themes/utils'

const FlexWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-top:5rem;
`;
const FlexLeft = styled.div`
 flex: 0 0 45%;
 
 @media ${props => props.theme.mediaQueries.smaller} {
  flex: 0 0 95%;
}
`;
const FlexRight = styled.div`
 flex: 0 0 45%;
 
 @media ${props => props.theme.mediaQueries.smaller} {
  flex: 0 0 95%;
}
 `;

const Border = styled.div`
border: 2px dashed var(--primary);
border-radius:7px;
padding:2rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
font-size:2rem;
color:var(--primary);
margin-top:6rem;

@media ${props => props.theme.mediaQueries.smaller} {
  flex: 0 0 95%;
  margin:2rem;
}
`;

const Aboutpane2 = () => {
  return (
    <>
    <p>With the motto <SpanGreen> “Grow, Preserve and Provide”</SpanGreen>, our operations are segregated into two divisions –</p>
    <FlexWrapper>
      <FlexLeft>
        <Border>
          <CenterAlign>
            <SubHeading><SpanGreen>Production</SpanGreen></SubHeading>
          </CenterAlign>
          <p>With the well-established Crop Focused Clusters (CFC), individual <SpanGreen> farmers and farmer organizations </SpanGreen> come together to form our production division.</p>
          <p>Allowing them tofocus <SpanGreen> completely in farming </SpanGreen> without worrying about marketing the produce, and the result is high quality produce.</p>
        </Border> 
      </FlexLeft>
      <StyledIcon icon={faExchangeAlt}/>
      <FlexRight>
        <Border>
          <CenterAlign>
            <SubHeading><SpanGreen>Supply Chain</SpanGreen></SubHeading>
          </CenterAlign>
          <p>Our supply chain division takes up the responsibility of ensuring:</p>
          <ol>
            <li>That harvested commodities are alive with sustained chemical and respiration processes</li>
            <li>That globally accepted quality and cleanliness is maintained</li>
          </ol>
        </Border>
      </FlexRight>
    
    </FlexWrapper>
      
    </>
  )
}

export default Aboutpane2
