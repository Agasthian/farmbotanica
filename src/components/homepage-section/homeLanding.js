import React from "react"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"

import { Container, CenterAlign } from "../../themes/utils"

const Section = styled.section`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  margin-top: 19rem;
  position: absolute;
  color: #fff;
  z-index: 1;
  text-align: center;
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
const SubHeading2 = styled(animated.h2)`
  color: var(--secondary);
  font-weight: 600;
  font-size: 2.4rem;
  text-transform: uppercase;
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

  return (
    <>
      <Section>
        <Container>
          <CenterAlign>
            <Content>
              <MainHeading style={MainHeadingSpring}>Farm Botanica</MainHeading>
              <SubHeading style={SubHeadingSpring}>
                Shipping Greens all over the Globe
              </SubHeading>
              <SubHeading2 style={SubHeadingSpring}>
                Website under Construction
              </SubHeading2>
            </Content>
          </CenterAlign>
        </Container>
      </Section>
    </>
  )
}

export default HomeLanding
