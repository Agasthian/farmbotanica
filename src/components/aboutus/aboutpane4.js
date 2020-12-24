import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import {SubHeading,CenterAlign,SpanGreen} from '../../themes/utils'
import {FlexWrapper,FlexContent} from './aboutpane3'

const OPWrapper = styled.div`
position:relative;
margin-bottom:15rem;

@media ${props => props.theme.mediaQueries.small} {
  display:none;
}
`;
const StyledImg = styled(Img)`
width:22rem;

@media ${props => props.theme.mediaQueries.small} {

}

`;

const OPContentBox = styled.div`
width:27rem;
`;

const Content1 = styled.div`
position:absolute;
top: -5rem;
left:20rem;
  @media ${props => props.theme.mediaQueries.medium} {
    left:0
  }
`;
const Content2 = styled.div`
position:absolute;
top: 0;
left:70rem;
@media ${props => props.theme.mediaQueries.medium} {
  left:55rem
}
`;
const Content3 = styled.div`
position:absolute;
top: 7rem;
left:20rem;
@media ${props => props.theme.mediaQueries.medium} {
  left:0
}
`;
const Content4 = styled.div`
position:absolute;
top:13rem;
left:70rem;
@media ${props => props.theme.mediaQueries.medium} {
  left:55rem
}
`;
const Content5 = styled.div`
position:absolute;
top: 20rem;
left: 20rem;
@media ${props => props.theme.mediaQueries.medium} {
  left:0
}
`;
const Content6 = styled.div`
position:absolute;
bottom :-7rem;
left:70rem;
@media ${props => props.theme.mediaQueries.medium} {
  left:55rem
}
`;

const OPWrapperMobile= styled.div`

@media only screen and (min-width: 48em) {
  display:none;
}
`;

const Aboutpane4 = () => {

  /****** Query Wave image ******/
  const data = useStaticQuery(graphql`
  query {
    fileName: file(relativePath: { eq: "wave1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  `);

  return (
    <>
    {/**********  OPERATIONAL PROCEDURE ************/}
      <SubHeading id="operation_procedure" style={{marginBottom: "10rem"}}>Operational Procedure</SubHeading>
      <OPWrapper>
        <CenterAlign>
          <StyledImg fluid={data.fileName.childImageSharp.fluid} />
          
            <Content1>
              <OPContentBox>
              <h4>1.	Purchase Order</h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
              </OPContentBox>
            </Content1>
            <Content2>
              <OPContentBox>
              <h4>2.	Notify CFC</h4>
              <p>Inform our farmers belonging to the appropriate CFC about the new requirement.</p>
              </OPContentBox>
            </Content2>
            <Content3>
              <OPContentBox>
              <h4>3.	Procure & Process</h4>
              <p>Move the produce from farms to PC and apply all the processing techniques.</p>
              </OPContentBox>
            </Content3>
            <Content4>
              <OPContentBox>
              <h4>4.	Quality Inspection</h4>
              <p>Assess the quality of produce before & after processing. Perform quality inspection and quarantine checking.</p>
              </OPContentBox>
            </Content4>
            <Content5>
              <OPContentBox>
              <h4>5.	Packaging</h4>
              <p>The produce is then packed, labelled and marked as per the buyer’s requirement.</p>
              </OPContentBox>
            </Content5>
            <Content6>
              <OPContentBox>
              <h4>6.	Shipping</h4>
              <p>Dispatch the packed consignment to the nearest airport or seaport for export orders and business houses for domestic orders.</p>
              </OPContentBox>
            </Content6>
            
        </CenterAlign>
      </OPWrapper>

        
      <OPWrapperMobile>
        <CenterAlign>
          <StyledImg fluid={data.fileName.childImageSharp.fluid} />
        </CenterAlign>
          <FlexWrapper>
            <FlexContent>
              <h4><SpanGreen>1.	Purchase Order</SpanGreen></h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
            </FlexContent>
          </FlexWrapper>
          <FlexWrapper>
            <FlexContent>
              <h4><SpanGreen>2.	Notify CFC</SpanGreen></h4>
              <p>Inform our farmers belonging to the appropriate CFC about the new requirement.</p>
            </FlexContent>
          </FlexWrapper>
          <FlexWrapper>
            <FlexContent>
              <h4><SpanGreen>3.	Procure & Process</SpanGreen></h4>
              <p>Move the produce from farms to PC and apply all the processing techniques.</p>
            </FlexContent>
          </FlexWrapper>
          <FlexWrapper>
            <FlexContent>
              <h4><SpanGreen>4.	Quality Inspection</SpanGreen></h4>
              <p>Assess the quality of produce before & after processing. Perform quality inspection and quarantine checking.</p>
            </FlexContent>
          </FlexWrapper>
          <FlexWrapper>
            <FlexContent>
              <h4><SpanGreen>5.	Packaging</SpanGreen></h4>
              <p>The produce is then packed, labelled and marked as per the buyer’s requirement.</p>
            </FlexContent>
          </FlexWrapper>
          <FlexWrapper>
            <FlexContent>
              <h4><SpanGreen>6.	Shipping</SpanGreen></h4>
              <p>Dispatch the packed consignment to the nearest airport or seaport for export orders and business houses for domestic orders.</p>
            </FlexContent>
          </FlexWrapper>
          
      </OPWrapperMobile>
    </>
  )
}

export default Aboutpane4
