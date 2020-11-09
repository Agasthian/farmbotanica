import React from 'react'
import styled from 'styled-components'

import orangeCircle from "../../images/orange_circle.svg"
import whiteCircle from "../../images/white_circle.svg"
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { StyledIcon } from '../../themes/utils';

const Wrapper = styled.div`
  background-color:var(--primary);
  height:50rem;
  flex: 0 0 35%;
  border-radius:7px;
  color:var(--white);
  padding:2rem 3rem;
  position:relative;
  overflow: hidden;

  @media ${props => props.theme.mediaQueries.smaller} {
    flex: 0 0 100%;
  }
`;

const Heading = styled.h3`
font-wight:400;
letter-spacing:1px;
`;

const Address = styled.div`
  padding: 2rem 0;
  display:flex;
  flex-direction:column;
`

const AddLine = styled.div`
padding-top: 2rem;
display:flex;
`

const Para = styled.p`
margin: 0;
margin-left: 1rem;
color: var(--white);
`

const IconWrap = styled.div`
flex: 0 0 4rem;
height:4rem;
width:4rem;
border-radius:50%;
background-color:var(--secondary);
display:flex;
justify-content:center;
align-items: center;
`;

const OrangeCircle = styled.img`
  width: 27rem;
  position: absolute;
  bottom: -11rem;
  right: -10rem;

  @media ${props => props.theme.mediaQueries.smallest} {
    width:25rem;
    bottom: -17rem;
    right: -16rem;
  }
`;

const WhiteCircle = styled.img`
width: 11rem;
position: absolute;
bottom: 5rem;
right: 7rem;

@media ${props => props.theme.mediaQueries.smallest} {
  width:5rem;
  bottom: 2rem;
    right: 2rem;
}
}
`;

const ContactInfo = () => {
  return (
      <Wrapper>
        <Heading>Contact Information</Heading>
        
        <p style={{color:"var(--light-text)"}}>Fill up the form and out Team will get back to you within 24 hours. </p>
        <Address>
          <AddLine>
            <IconWrap><StyledIcon icon={faEnvelope} size='1x'/></IconWrap>
            <Para>support@farmbotanica.com</Para>
          </AddLine>
          <AddLine>
            <IconWrap><StyledIcon icon={faPhoneAlt} size='1x'/></IconWrap>
            <Para>(+91) 73588 71283</Para>
          </AddLine>
          <AddLine>
            <IconWrap><StyledIcon icon={faMapMarkerAlt} size='1x'/></IconWrap>
            <Para>No :55, Arcot Road, Saligramam, Chennai : 600 093.</Para>
          </AddLine>
        </Address>
          <OrangeCircle src={orangeCircle}/>
          <WhiteCircle src={whiteCircle}/>
        
      </Wrapper>
  )
}

export default ContactInfo
