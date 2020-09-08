import React from "react"
import { useSpring, animated } from "react-spring"

import heroImg from "../../images/hero_img.svg"
import styled from "styled-components"

const StyledImage = styled.img`
  margin-top: 7rem;
  height: 50rem;
  width: 60rem;
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
