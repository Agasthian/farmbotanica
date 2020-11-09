import React from 'react'
import styled from 'styled-components'
import { useStaticQuery,graphql } from "gatsby"


import Head from "../../components/head"
import Layout from "../../components/layout/layout"
import { Wrapper, Container } from "../../components/layout/element"
import CategoryCard from '../../components/UI/categoryCard'
import ProductListHead from '../../components/productlist/productlisthead'

const ProductListCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 100%;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    margin: 0;
  }
`

const Rice = () => {
  
  //GraphlQL
  const data = useStaticQuery(graphql`
  query{
    mdx(
      slug: {
        regex:"/rice/indianrice/"
      }
    ){
      frontmatter{
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    products:allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "/content/products/rice/" } }
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

  const {title, image} = data.mdx.frontmatter 
  const props = {
    title : title,
    image : image
  }

  
  return (
    <>
     <Head title="Spices" />
     <Layout>
        <Wrapper topmargin topmarginmobile bottommargin>
          <Container> 
          <ProductListHead {...props}  />
          <ProductListCard>
              {data.products.edges.map(item =>(
              <CategoryCard list key={item.node.id} cardinfo={item.node} />
              ))}
          </ProductListCard>
          </Container>
        </Wrapper> 
      </Layout>
    </>
  )
}

export default Rice





