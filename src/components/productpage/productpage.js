import React from 'react'
import Head from "../head"
import {  ProductListBackLink } from "../layout/element"
import { SubHeading, CenterAlign } from "../../themes/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

const Productpage = ({title}) => {
  return (
    <div>
      <Head title={title} />
       
          <ProductListBackLink to="/category/veg">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" /> Fresh Vegetables
          </ProductListBackLink>
          <CenterAlign>
            <SubHeading>
              {title} - Product Profile
            </SubHeading>
          </CenterAlign>

         
          
        
     
    </div>
  )
}

export default Productpage
