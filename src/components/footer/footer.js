import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: var(--primary);
  color: var(--light-text);
  margin: 0;
  padding: 7rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Built by Agasthian Rathinavel ,{" "}
        <span role="img" aria-label="copywright">
          ©️
        </span>{" "}
        2020
      </p>
    </FooterWrapper>
  )
}

export default Footer
