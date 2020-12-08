import React from 'react'
import styled from 'styled-components'
import Head from "../head"
import {  ProductListBackLink } from "../layout/element"
import { SubHeading, CenterAlign } from "../../themes/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

const InfoTableBorder = styled.div`
border: 1px solid #ddd;
padding: 15px 0;
`;
const InfoTableWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const InfoTableLeft = styled.div`
flex: 0 0 45%;
border-right: 2px solid #ddd;
`;

const InfoTableRight = styled.div``;

const DescriptionWrapper = styled.div`
  padding:15px;
`;
const SpanHeader = styled.span`
  font-weight: 600;
  font-family:Poppins;
  color:#4CAF50;
`;

const Productinfopage = ({title,description,cultivation,hscode}) => {
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
        <InfoTableBorder>
          <InfoTableWrapper>
            <InfoTableLeft>
            <SpanHeader>Category</SpanHeader> : {title} <br/>
            <SpanHeader>Cultivation </SpanHeader> : {cultivation} <br/>
            <SpanHeader>HS Code </SpanHeader> : {hscode}
            </InfoTableLeft>
            <InfoTableRight>
              Availability Calendar – Throughout the Year
            </InfoTableRight>
          </InfoTableWrapper>
          <DescriptionWrapper>
            <SpanHeader>Product Description</SpanHeader> : {description}
          </DescriptionWrapper>
        </InfoTableBorder>
     
    </div>
  )
}

export default Productinfopage
