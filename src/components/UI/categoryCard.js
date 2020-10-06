import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { SubHeadingH4 } from "../../themes/utils"

const StyledImg = styled(BackgroundImage)`
  width: 20rem;
  height: 30rem;
  box-shadow: 0rem 2rem 5rem var(--shadow-light);
  border-radius: 7px;
  overflow: hidden;

  @media ${props => props.theme.mediaQueries.smaller} {
    width: 17rem;
    height: 15rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    width: 13rem;
  }
`
const BgOverlay = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const CategoryHeading = styled(SubHeadingH4)`
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: var(--primary);
  text-align: center;
  padding: 1rem 0;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const CategoryCard = ({ cardinfo }) => {
  const { title, slug, image } = cardinfo.frontmatter
  return (
    <>
      <StyledLink to={slug}>
        <StyledImg fluid={image.childImageSharp.fluid}>
          <BgOverlay>
            <CategoryHeading>{title}</CategoryHeading>
          </BgOverlay>
        </StyledImg>
      </StyledLink>
    </>
  )
}

export default CategoryCard
