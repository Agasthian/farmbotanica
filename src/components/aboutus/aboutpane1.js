import React from 'react'
import styled from 'styled-components'

import aboutHero from '../../images/picture1.jpg'
import {SubHeading,CenterAlign} from '../../themes/utils'


const StyledImage = styled.img`
width:60rem;

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
            <SubHeading style={{textAlign : "center", margin:"4rem 0"}}>We are pioneers in procuring high quality   <br/> Agro Products
            </SubHeading>
          </CenterAlign>
          <CenterAlign>
            <StyledImage src={aboutHero}/>
          </CenterAlign>  
       
    </>
  )
}

export default AboutPane1
