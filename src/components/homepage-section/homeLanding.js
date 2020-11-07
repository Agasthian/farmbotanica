import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"

import ScrollDown from "../UI/scrollDown"
import { Section, Container, Wrapper } from "../layout/element"
import BackgroundLogo from "../UI/backgroundLogo"
import Button from "../UI/button"

//wrap - flex box
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${props => props.theme.mediaQueries.smaller} {
    order: 2;
  }
`

const MainHeading = styled(animated.h1)`
  color: var(--primary);
  font-size: 6.75rem;
  margin: 0;
  font-weight: 700;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 5.5rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    font-size: 4.5rem;
  }
`

const SubHeading = styled(animated.h2)`
  color: var(--primary);
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 3.2rem;
  padding: 0 6rem 0 0;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
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
      <Section id="header" fullHeight center>
        <Container>
          <Wrapper>
            <FlexWrapper>
              <Content>
                <MainHeading style={MainHeadingSpring}>
                  Farm Botanica
                </MainHeading>
                <SubHeading style={SubHeadingSpring}>
                Botany being one of the top most valued sciences, we at Farm Botanica strive to encapsulate all that falls under the proud branch of Botany thereby justifying our brand name.
                </SubHeading>
                <Link to="/category_page">
                  <Button large style={ButtonSpring}>
                    View Product Category
                    <StyledIcon icon={faArrowCircleRight} size="1x" />
                  </Button>
                </Link>
              </Content>
              <BackgroundLogo />
            </FlexWrapper>
          </Wrapper>
          <ScrollDown />
        </Container>
      </Section>
    </>
  )
}

export default HomeLanding
