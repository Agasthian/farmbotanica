import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CategoryCard from "../UI/categoryCard"
import { Section, Container } from "../layout/element"
import { SubHeading,SubHeadingH3,SpanGreen, CenterAlign } from "../../themes/utils"


const CategoryWrapper = styled.div`
  margin: 8rem 0;
  

  @media ${props => props.theme.mediaQueries.micro} {
    margin-top: 2rem;
  }
`

const CardWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 50rem;
    justify-content: space-around;
  }
`

const CategorySection = () => {
  //query multiple images and frontmatter from mdx files
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 5
        sort: { fields: [frontmatter___order], order: ASC }
        filter: { fileAbsolutePath: { regex: "/content/category/" } }
      ) {
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
            <SubHeading style={{margin:"0"}}>“We Bring the <SpanGreen>Best Products</SpanGreen> for you”</SubHeading>
            </CenterAlign>
            <CenterAlign>
            <SubHeadingH3> Product Category</SubHeadingH3>
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
