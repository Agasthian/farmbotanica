import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"

import ScrollDown from "../UI/scrollDown"
import { Section, Container, Wrapper } from "../layout/element"
import BackgroundLogo from "../UI/backgroundLogo"
import Button from "../UI/button"
import {StyledIconButton,SpanGreen} from '../../themes/utils'
import BGimg from "../../images/Worldmap.png"

//Landing BG

const LandingBG = styled.div`

background-image: url(${BGimg});
width: 98vw;
height: 100vh;
`;

//wrap - flex box
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${props => props.theme.mediaQueries.smaller} {
    flex-direction: column;
  }
  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${props => props.theme.mediaQueries.smaller} {
    order: 2;
    margin-top: 4rem;
  }
`

const MainHeading = styled(animated.h1)`
  color: var(--text);
  font-size: 2.8rem;
  margin: 0;
  font-weight: 600;
  margin: 0;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 2.4rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    font-size: 2rem;
  }
`

const SubHeading = styled(animated.h2)`
  
  
  font-weight: 500;
  font-size: 1.6rem;
  margin: 2rem 9rem 2.2rem 0;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`


const HomeLanding = () => {
  //Animation
  const MainHeadingSpring = useSpring({
    config: config.slow,
    delay: 600,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(40px)",
    },
  })

  const SubHeadingSpring = useSpring({
    config: config.slow,
    delay: 700,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(50px)",
    },
  })

  const ButtonSpring = useSpring({
    config: config.slow,
    delay: 900,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(70px)",
    },
  })

  return (
    <>
      <LandingBG>
        <Section  id="header" fullHeight center>
            <Container>
              <Wrapper>
                <FlexWrapper>
                  <Content>
                    <MainHeading style={MainHeadingSpring}>
                    “Production & Marketing of <SpanGreen> Agriculture, Horticulture & Floriculture</SpanGreen>”
                    </MainHeading>
                    <SubHeading style={SubHeadingSpring}>
                    <SpanGreen style={{fontWeight: '600'}} >FARM BOTANICA</SpanGreen> strives to encapsulate all that falls under the proud branch of Botany thereby justifying our brand name.
                    </SubHeading>
                    <Link to="/category_page">
                      <Button large style={ButtonSpring}>
                        View Product Category
                        <StyledIconButton icon={faArrowCircleRight} size="1x" />
                      </Button>
                    </Link>
                  </Content>
                  <BackgroundLogo />
                </FlexWrapper>
              </Wrapper>
              <ScrollDown />
            </Container>
          </Section>
      </LandingBG>
    </>
  )
}

export default HomeLanding
