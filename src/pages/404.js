import React from "react"
import styled from "styled-components"

import Head from "../components/head"
import notFoundImg from "../images/not_found.svg"

const Svg = styled.img`
  max-width: 100%;
  height: 30vh;
  margin-bottom: 10rem;
`

const PageNotFound = () => {
  return (
    <div>
      <Head title="404 Not Found" />
      <Svg src={notFoundImg} alt="404 Page not Found" />
    </div>
  )
}

export default PageNotFound
