import React from 'react'
import styled from 'styled-components'
import { faTractor, faTruck } from "@fortawesome/free-solid-svg-icons"

import {SubHeading,SubHeadingH4,StyledIcon} from '../../themes/utils'


const BoxWrapper = styled.div`
display:flex;
`;

const BoxContent = styled.div`
  height:35rem;
  width:50rem;
  background-color:var(--primary);
  margin:2rem;
  padding:2rem;
  border-radius:5px;
  color:var(--white);
  transition:all 0.3s ease-out;

  &:hover{
    background-color: var(--white);
    transform: translateY(-7px);
    color: var(--primary);
    box-shadow: 0rem 1rem 2rem var(--shadow-light);
  }
`

const IconWrap = styled.div`
height:6rem;
width:4em;
border-radius:50%;
background-color:var(--secondary);
display:flex;
justify-content:center;
align-items: center;


  ${BoxContent}:hover &{
    background-color:var(--primary);
    color:var(--white);
  }
`;

const StyledH4 = styled(SubHeadingH4)`

${BoxContent}:hover &{
  color:var(--primary);
}
`;

const StyledList = styled.li`
  line-height: 2rem;
  word-spacing: 4px;
`;

const Aboutpane3 = () => {
  return (
    <>  
      <SubHeading>How Farm Botanica work?</SubHeading>
      <p>With the motto “Grow and Preserve”, our operations are segregated into two divisions – Farming & Supply Chain</p>
      <BoxWrapper>

        <BoxContent>
          <IconWrap>
            <StyledIcon icon={faTractor} size='2x'/>
          </IconWrap>
          <StyledH4>
            Farming
          </StyledH4>
          <ul>
            <StyledList>Through the strategic relationship we share with the well-established Crop Focused Clusters (CFC), our farming division helps farms and farmers to focus completely in farming, and the result is high quality produce.</StyledList>
            <StyledList></StyledList>
            <StyledList></StyledList>
          </ul>
        </BoxContent>

        <BoxContent>
          <IconWrap>
            <StyledIcon icon={faTruck} size='2x'/>
          </IconWrap>
          <StyledH4>
            Supply Chain
          </StyledH4>
          <ul>
            <StyledList>That harvested commodities are alive with sustained chemical and respiration processes</StyledList>
            <StyledList>That globally accepted quality and cleanliness is maintained </StyledList>
            <StyledList></StyledList>
          </ul>
        </BoxContent>

      </BoxWrapper>
    </>
  )
}


export default Aboutpane3
