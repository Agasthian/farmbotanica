import React from 'react'
import styled from 'styled-components'
import {Link } from "gatsby"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

import Head from "../head"
import Button from '../../components/UI/button'
import {  ProductListBackLink } from "../layout/element"
import { StyledIconButton,SubHeading, CenterAlign } from "../../themes/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

/*******Css for Top  info table************/
const FlexWrapper = styled.div`
  display:flex;
  justify-content:space-between;
`;

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

@media ${props => props.theme.mediaQueries.smaller} {
  flex: 0 0 95%;
  border-right:none;
}

`;

const InfoTableRight = styled.div`
display:flex;
flex-direction: column;`;

const InfoTableRightHeading = styled.h4`
color:var(--text);
margin-bottom: 0.7rem;
`;

const InfoTableRightPara = styled.p`
margin: 0.3rem 0;
`;

const GreenBox = styled.span`
margin-left: 1rem;
font-size: 14px;
padding-left: 30px;
background: var(--primary);
`;

const OrangeBox = styled.span`
margin-left: 1rem;
font-size: 14px;
padding-left: 30px;
background: var(--secondary);
`;
const DescriptionWrapper = styled.div`
  padding:15px;
`;
const SpanHeader = styled.span`
  font-weight: 600;
  font-family:Poppins;
  color:#4CAF50;
`;

const AvailabilityChartImg = styled.img`
width:55rem;

@media ${props => props.theme.mediaQueries.smaller} {
  width: 30rem;
}
`

/***********Css for images in the mdx files***********/
export const FlowChartImg = styled.img`
width: 100rem;

@media ${props => props.theme.mediaQueries.medium} {
  width: 45rem;
}

@media ${props => props.theme.mediaQueries.smaller} {
  width: 35rem;
}
`;


const Productinfopage = ({title,description,cultivation,hscode, category,botanicalname,commercialpart,imgageprop}) => {
  //*********Method to display if props is available */ 
  const Cultivationmethod = () =>{
    return (
     <>
      <SpanHeader>Cultivation : </SpanHeader> {cultivation} <br/>
    </>
    )
  }
  const Botanicalname = () =>{
    return (
     <>
      <SpanHeader>Botanical Name : </SpanHeader> {botanicalname} <br/>
    </>
    )
  }
  const Commercialpart = () =>{
    return (
     <>
      <SpanHeader>Commercial Part : </SpanHeader> {commercialpart} <br/>
    </>
    )
  }

  return (
    <div>
      <Head title={title} />    
       <FlexWrapper>
         <>
          <ProductListBackLink to="/category/veg">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" /> Fresh Vegetables
          </ProductListBackLink>
        </>
        <>
          <Link to='/contact'> 
            <Button secondary>
              Make an Enquiry 
              <StyledIconButton icon={faArrowCircleRight} size="1x" />
            </Button>
          </Link>
        </>
      </FlexWrapper>
        <CenterAlign>
          <SubHeading>
            {category} - Product Profile
          </SubHeading>
        </CenterAlign>
        <InfoTableBorder>
          <InfoTableWrapper>
            <InfoTableLeft>

              <SpanHeader>Category</SpanHeader> : {category} <br/>
              {cultivation ?  Cultivationmethod()   : '' } 
              <SpanHeader>HS Code </SpanHeader> : {hscode} <br/>
              {botanicalname ? Botanicalname() : ''}
              {commercialpart ? Commercialpart() : ''}

            </InfoTableLeft>
            <InfoTableRight>
              <InfoTableRightHeading>
                Availability Calendar – Throughout the Year
              </InfoTableRightHeading>
                <InfoTableRightPara>Peak Season <GreenBox/></InfoTableRightPara>
                <InfoTableRightPara>Lean Season <OrangeBox/></InfoTableRightPara>
                <AvailabilityChartImg src={imgageprop}/>
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
