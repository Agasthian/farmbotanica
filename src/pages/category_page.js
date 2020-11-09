import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout/layout"
import { Container, Wrapper } from "../components/layout/element"
import CategoryCard from "../components/UI/categoryCard"
import { SubHeading } from "../themes/utils"

const CategoryContent = styled.div``
const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Heading = styled(SubHeading)`
  margin: 0;
  font-size: 2.6rem;
`

const CardWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  height: 64rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    
    margin: 0;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    
  }
`

const Categorypage = () => {
  //query multiple images and frontmatter from mdx files
  const data = useStaticQuery(graphql`
    query {
      allMdx(
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
    <>
      <Head title="Category Page" />
      <Layout>
        <Container>
          <Wrapper topmargin bottommargin topmarginmobile>
            <CategoryContent>
              <HeadingWrapper>
                <Heading>Category</Heading>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  perspiciatis earum ex cupiditate aperiam blanditiis eveniet
                  rerum omnis officiis voluptatum asperiores dolores error,
                  velit doloremque ut in. Voluptas, aliquam amet.
                </p>
              </HeadingWrapper>
              <CardWrapper>
                {data.allMdx.edges.map(item => (
                  <CategoryCard key={item.node.id} cardinfo={item.node} />
                ))}
              </CardWrapper>
            </CategoryContent>
          </Wrapper>
        </Container>
      </Layout>
    </>
  )
}

export default Categorypage
