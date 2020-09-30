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
`

const MainHeading = styled(animated.h1)`
  color: var(--primary);
  font-size: 6rem;
  margin: 0;
  font-weight: 700;
`

const SubHeading = styled(animated.h2)`
  color: var(--secondary);
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 4.2rem;
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
                  Shipping Greens all over the Globe
                </SubHeading>
                <Link to="/category_page">
                  <Button style={ButtonSpring}>
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
