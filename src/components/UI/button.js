import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

const StyledButton = styled(animated.button)`
  cursor: pointer;
  border: none;
  outline: none;
  background: var(--primary);
  color: var(--white);
  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 500;
  word-spacing: 2px;
  border-radius: 10rem;
  padding: 0.8rem 2rem;
  line-height: ${({ large }) => (large ? "3rem" : "2.4rem")};
  box-shadow: 0px 8px 15px var(--shadow-color);
  transition: all 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.micro} {
    font-size: 1.4rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 15px 10px var(--shadow-btn);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px var(--shadow-btn);
  }
`

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
