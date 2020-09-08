import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"

import BackgroundLogo from "../UI/backgroundLogo"
import Button from "../UI/button"
import { Container } from "../../themes/utils"

const Section = styled.section`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  margin-top: 19rem;
`
//warap - flex box
const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  font-size: 1.8rem;
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
      <Section>
        <Container>
          <MainWrapper>
            <Content>
              <MainHeading style={MainHeadingSpring}>Farm Botanica</MainHeading>
              <SubHeading style={SubHeadingSpring}>
                Shipping Greens all over the Globe
              </SubHeading>
              <Link to="/category_page">
                <Button style={ButtonSpring}>View Product Category</Button>
              </Link>
            </Content>
            <BackgroundLogo />
          </MainWrapper>
        </Container>
      </Section>
    </>
  )
}

export default HomeLanding
