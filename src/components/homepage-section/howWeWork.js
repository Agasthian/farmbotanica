import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql,Link } from "gatsby"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

import Button from "../UI/button"
import { Section, Container, Wrapper } from "../layout/element"
import { SubHeading,SubHeadingH3,StyledIconButton,SpanGreen } from "../../themes/utils"

const SubHeadingh3 = styled(SubHeadingH3)`
  font-weight:400;
  font-size:1.6rem;
  width:80%;
`

const FlexWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`;

const ImageWrapper = styled.div`
flex: 0 0 35%;
border-radius: 7px;
padding: 2rem;
box-shadow: 0rem 0.5rem 1.5rem rgb(0 0 0 / 20%);

@media ${props => props.theme.mediaQueries.smaller} {
  flex: 0 0 80%;
  margin-bottom: 2rem;
}
@media ${props => props.theme.mediaQueries.medium} {
  flex: 0 0 60%;
  margin-bottom: 2rem;
}
`

const ButtonWrapper = styled.div`
text-align:center;
margin-top:1.5rem;
`;

const StyledImg = styled(Img)`
border-radius: 7px;
overflow: hidden;
`;

const Howwework = () => {

  //Querying img
  const data = useStaticQuery(graphql`
    query {
     image1: file(relativePath: { eq: "Opr_1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
     image2: file(relativePath: { eq: "Opr_2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

    }
  `)

  return (
    <Section fullHeight topmargin>
      <Container>
        <Wrapper>
          <SubHeadingH3>How we work</SubHeadingH3>
          <SubHeading>“<SpanGreen>Our Approach </SpanGreen> diffrentiates us from others”</SubHeading>
            
          <FlexWrapper>
            <ImageWrapper>
              <StyledImg fluid={data.image1.childImageSharp.fluid} alt="" />
              <ButtonWrapper>
                <Link to="/about/#operation_infra">
                  <Button>
                    Read more
                    <StyledIconButton icon={faArrowCircleRight} size="1x" />
                  </Button>
                </Link>
              </ButtonWrapper>
            </ImageWrapper>

            <ImageWrapper>
              <StyledImg fluid={data.image2.childImageSharp.fluid} alt="" />
              <ButtonWrapper>
                <Link to="/about/#operation_procedure">
                  <Button>
                    Read more
                    <StyledIconButton icon={faArrowCircleRight} size="1x" />
                  </Button>
                </Link>
              </ButtonWrapper>
            </ImageWrapper>
          </FlexWrapper>

        </Wrapper>
      </Container>
    </Section>
  )
}

export default Howwework
