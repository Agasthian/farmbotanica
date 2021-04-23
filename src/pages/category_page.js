import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout/layout"
import { Container, Wrapper } from "../components/layout/element"
import CategoryCard from "../components/UI/categoryCard"
import { SubHeading,SpanGreen } from "../themes/utils"

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
    height: 100%;
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
        limit:6
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
                <p><SpanGreen> FARM BOTANICA </SpanGreen>has been truly successful in bringing a wide range of products under one roof through:</p>
                <p style={{margin:"0"}}><SpanGreen>
                  “The creation of state-wide agricultural value chain by establishing multiple crop focused clusters and assigning a processing infrastructure to each cluster”</SpanGreen>
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
