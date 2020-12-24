import React from "react"
import { useSpring, animated } from "react-spring"

import heroImg from "../../images/hero_img5.png"
import styled from "styled-components"

const StyledImage = styled.img`
  width: 60rem;

  @media ${props => props.theme.mediaQueries.large} {
    width: 50rem;
  }
  @media ${props => props.theme.mediaQueries.larger} {
    width: 65rem;
  }
  @media ${props => props.theme.mediaQueries.largest} {
    width: 60rem;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    width: 45rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    width: 35rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    width: 30rem;
  }
`

const BackgroundLogo = () => {
  //Animation
  const BgImgSpring = useSpring({
    delay: 1000,
    opacity: 1,
    from: {
      opacity: 0,
    },
  })

  return (
    <animated.div style={BgImgSpring}>
      <StyledImage src={heroImg} />
    </animated.div>
  )
}

export default BackgroundLogo
