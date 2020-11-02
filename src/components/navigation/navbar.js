import React, { useState, useEffect } from "react"
import Img from 'gatsby-image'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"

import DesktopMenu from "./desktopMenu"
import { Container } from "../../themes/utils"

/********CSS - Styled Component********/
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
  height: ${({ isMobile }) => (isMobile ? "6rem" : "10rem")};
  // height: ${({ isScroll }) => (isScroll ? "6rem" : "10rem")};
`

const StyledLogo = styled(Img)`
height: 8rem;
width: 10rem;
`;

const Navbar = () => {
  //State
  const [isMobile, setisMobile] = useState(null)
  const [isScroll, setisScroll] = useState(null)
  //Animation
  const NavbarSpring = useSpring({
    config: config.stiff,
    opacity: 1,
    height: "10rem",
    from: {
      opacity: 0,
      height: "0rem",
    },
  })
  
  // Function to check responsiveness
  const changeMobile = () => {
    window.matchMedia("(max-width:37.5em)").matches
      ? setisMobile(true)
      : setisMobile(false)
  }

  //Funciton to minimize height on scroll
  const resizeHeaderOnScroll=()=> {
    console.log("test start")
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
      setisScroll(true)
    } else {
      headerEl.classList.remove("smaller");
      setisScroll(false)
    }
    console.log(distanceY)
  }

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
    changeMobile()
    window.addEventListener("resize", changeMobile)
    return () => window.removeEventListener("resize", changeMobile)
  }, [])

  //Fetch Logo using GraphQL
  const data = useStaticQuery(graphql`
    query{
      file(relativePath:{eq:"logo.png"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <StyledHeader id="js-header" style={NavbarSpring}>
        <Container>
          <Wrapper>
            <Link to='/'>
              <StyledLogo fluid={data.file.childImageSharp.fluid} alt='Farm Botanica Logo'/>
            </Link>
            {isMobile ? <p>Test</p> : <DesktopMenu />}
          </Wrapper>
        </Container>
      </StyledHeader>
    </>
  )
}

export default Navbar
