import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import {SubHeading,CenterAlign} from '../../themes/utils'


const OPWrapper = styled.div`
position:relative;
margin-bottom:15rem;
`;
const StyledImg = styled(Img)`
width:22rem;
`;

const OPContentBox = styled.div`
width:27rem;
`;

const Content1 = styled.div`
position:absolute;
top: -5rem;
left:22rem;
`;
const Content2 = styled.div`
position:absolute;
top: 0;
left:70rem;
`;
const Content3 = styled.div`
position:absolute;
top: 7rem;
left:22rem;
`;
const Content4 = styled.div`
position:absolute;
top:13rem;
left:70rem;
`;
const Content5 = styled.div`
position:absolute;
top: 20rem;
left: 22rem;
`;
const Content6 = styled.div`
position:absolute;
bottom :-7rem;
left:70rem;
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
              <h4>2.	Purchase Order</h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
              </OPContentBox>
            </Content2>
            <Content3>
              <OPContentBox>
              <h4>3.	Purchase Order</h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
              </OPContentBox>
            </Content3>
            <Content4>
              <OPContentBox>
              <h4>4.	Purchase Order</h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
              </OPContentBox>
            </Content4>
            <Content5>
              <OPContentBox>
              <h4>5.	Purchase Order</h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
              </OPContentBox>
            </Content5>
            <Content6>
              <OPContentBox>
              <h4>6.	Purchase Order</h4>
              <p>Finalize terms and conditions of trade to confirm the purchase order.</p>
              </OPContentBox>
            </Content6>
            
        </CenterAlign>
      </OPWrapper>
    </>
  )
}

export default Aboutpane4
