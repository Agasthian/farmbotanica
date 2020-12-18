import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTemperatureHigh,faSnowflake,faCogs, faRadiationAlt } from "@fortawesome/free-solid-svg-icons"

import {SubHeading,SpanGreen} from '../../themes/utils'


const FlexWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
margin:3rem 0;
`;


const FlexContent = styled.div`
  box-shadow: 0rem 0.5rem 1.5rem rgb(0 0 0 / 10%);
  border-radius:7px;
  width:35rem;
  padding:2rem;
  
 
  @media ${props => props.theme.mediaQueries.smallest} {
    height:100%;
  }
`

const FlexContentSmall = styled.div`
  width:20rem;
  display:flex;
`;

const FlexContentSmallH4 = styled.h4`
  margin:0;
  padding-left:1rem;
  font-size:1.5rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--primary);
  font-size:3.75rem;
  `

const Aboutpane3 = () => {
  return (
    <>  
    {/**********  OPERATIONAL INFRASTRUCTURE ************/}
      <SubHeading style={{marginTop:"5rem"}}>Operational Infrastructure</SubHeading>
      
      <FlexWrapper>

        <FlexContent>
          <h4><SpanGreen>What’s Crop Focused Cluster (CFC)?</SpanGreen></h4>
          <p>Multiple groups of Indian farming villages consitute each CFC, focusing on crops well suited to their respective climatic conditions.</p>
        </FlexContent>

        <FlexContent>
          <h4><SpanGreen>What is a Processing Centre (PC)?</SpanGreen></h4>
          <p>Each CFC is assigned a Processing Centre – It has Handling Area, Quality Control, Cold Storage, APEDA Accredited Pack House & </p>
        </FlexContent>
        
        <FlexContent>
          <h4><SpanGreen>Handling Area</SpanGreen></h4>
          <p>Equipped with high end modern machinery to process the produce and meet international standards in terms of Quality, Cleanliness & Freshness.</p>
        </FlexContent>

      </FlexWrapper>
      <FlexWrapper>

        <FlexContent>
          <h4><SpanGreen>What’s Crop Focused Cluster (CFC)?</SpanGreen></h4>
          <p>In-House quality lab to assess the quality of produce before and after processing. It ensures export quality standards.</p>
        </FlexContent>

        <FlexContent>
          <h4><SpanGreen>Cold Storage</SpanGreen></h4>
          <p>In-built unit to store the excess produce and reduce post-harvest loss.</p>
        </FlexContent>

        <FlexContent>
          <h4><SpanGreen>Pack House</SpanGreen></h4>
          <p>APEDA Accredited Unit for packaging, labelling and marking as per customer needs. Also complies with the international export standards.</p>
        </FlexContent>

      </FlexWrapper>

      {/**********  INFRASTRUCTURE HIGHLIGHTS ************/}
      <SubHeading style={{marginTop:"5rem"}}>Infrastructure Highlights </SubHeading>
      <FlexWrapper>
        <FlexContentSmall>
          <StyledIcon icon={faTemperatureHigh}/> <FlexContentSmallH4> Vapour Heat Treatment Plant</FlexContentSmallH4>
        </FlexContentSmall>

        <FlexContentSmall>
          <StyledIcon icon={faSnowflake}/> <FlexContentSmallH4>Individual Quick Freezing (IQF) Unit</FlexContentSmallH4>  
        </FlexContentSmall>

        <FlexContentSmall>
        <StyledIcon icon={faRadiationAlt}/> <FlexContentSmallH4>Irradiation Unit with Gamma Radiation Tech</FlexContentSmallH4>
        </FlexContentSmall>

        <FlexContentSmall>
        <StyledIcon icon={faCogs}/> <FlexContentSmallH4>Crop Specific Process Lines and Ripening Chambers</FlexContentSmallH4>
        </FlexContentSmall>

        <FlexContentSmall>
        <StyledIcon icon={faTemperatureHigh}/> <FlexContentSmallH4>Vapour Heat Treatment Plant</FlexContentSmallH4>
        </FlexContentSmall>

      </FlexWrapper>

    </>
  )
}


export default Aboutpane3
