import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  width: 20rem;
  height: 20rem;
`

const CategoryCard = ({ cardinfo }) => {
  const { title, slug, image } = cardinfo.frontmatter
  return (
    <>
      <StyledImg fluid={image.childImageSharp.fluid} />
      <h1>{title}</h1>
    </>
  )
}

export default CategoryCard
