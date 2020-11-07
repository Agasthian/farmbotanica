import React from 'react'
import styled from 'styled-components'

import {SubHeading} from '../../themes/utils'
import { Container } from "../../components/layout/element"

const BG = styled.div`
background-color:#fff;
`
const Aboutpane2 = () => {
  return (
    <BG>
    
      <SubHeading>What does Farm Botanica do?</SubHeading>
      <p>Procure high quality agro products from our farms and farmers, belonging to their respective Crop Focused Cluster (CFC) of farming villages established across India. <br/> Process, pack and distribute the products - defined by their superior quality in terms of freshness, appearance, size, texture and taste - to the domestic as well as International buyers.</p>
      
    </BG>
  )
}

export default Aboutpane2
