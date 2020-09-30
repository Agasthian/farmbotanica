import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CategoryCard from "../UI/categoryCard"
import { Section, Container } from "../layout/element"
import { SubHeading, CenterAlign } from "../../themes/utils"

const CategoryWrapper = styled.div`
  margin-top: 8rem;
`

const CardWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CategorySection = () => {
  //query multiple images and frontmatter from mdx files
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/category/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section fullHeight>
      <Container>
        <CategoryWrapper>
          <CenterAlign>
            <SubHeading>Product Category</SubHeading>
          </CenterAlign>
          <CardWrapper>
            {data.allMdx.edges.map(item => (
              <CategoryCard key={item.node.id} cardinfo={item.node} />
            ))}
          </CardWrapper>
        </CategoryWrapper>
      </Container>
    </Section>
  )
}

export default CategorySection
