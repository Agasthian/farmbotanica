import React, { useState, useEffect } from "react"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"

import DesktopMenu from "./desktopMenu"
import { Container } from "../../themes/utils"

const StyledHeader = styled(animated.header)`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  user-select: none;
  height: ${({ isMobile }) => (isMobile ? "6rem" : "7rem")};
`

const Navbar = () => {
  //State
  const [isMobile, setisMobile] = useState(null)
  //Animation
  const NavbarSpring = useSpring({
    config: config.stiff,
    opacity: 1,
    height: "7rem",
    from: {
      opacity: 0,
      height: "0rem",
    },
  })
  const changeMobile = () => {
    window.matchMedia("(max-width:37.5em)").matches
      ? setisMobile(true)
      : setisMobile(false)
  }
  useEffect(() => {
    changeMobile()
    window.addEventListener("resize", changeMobile)
    return () => window.removeEventListener("resize", changeMobile)
  }, [])

  return (
    <>
      <StyledHeader style={NavbarSpring}>
        <Container>
          <Wrapper>
            <h2>Farm Botanica</h2>
            {isMobile ? <p>Test</p> : <DesktopMenu />}
          </Wrapper>
        </Container>
      </StyledHeader>
    </>
  )
}

export default Navbar
