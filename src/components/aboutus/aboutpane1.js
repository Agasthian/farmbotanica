import React from 'react'
import styled from 'styled-components'

import aboutHero from '../../images/picture1.jpg'
import {SubHeading,CenterAlign} from '../../themes/utils'
import { Container, Wrapper } from "../../components/layout/element"

const StyledImage = styled.img`
width:60rem;
`

const AboutPane1 = () => {
  return (
    <>
     <Container>
        <Wrapper topmargin>
          <CenterAlign>
            <SubHeading style={{textAlign : "center", margin:"4rem 0"}}>We are pioneers in procuring high quality   <br/> Agro Products
            </SubHeading>
          </CenterAlign>
          <CenterAlign>
            <StyledImage src={aboutHero}/>
          </CenterAlign>  
        </Wrapper>
      </Container>
    </>
  )
}

export default AboutPane1
