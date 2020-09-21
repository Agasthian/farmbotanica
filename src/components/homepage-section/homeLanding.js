import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"

import { Section, Container, Wrapper } from "../layout/element"
import BackgroundLogo from "../UI/backgroundLogo"
import Button from "../UI/button"

//warap - flex box
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
                  <Button style={ButtonSpring}>View Product Category</Button>
                </Link>
              </Content>
              <BackgroundLogo />
            </FlexWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}

export default HomeLanding
