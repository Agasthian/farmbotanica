import React from 'react'
import styled from 'styled-components'
import { useStaticQuery,graphql } from "gatsby"


import CategoryCard from '../../components/UI/categoryCard'
import Head from "../../components/head"
import Layout from "../../components/layout/layout"
import { Wrapper, Container } from "../../components/layout/element"
import ProductListHead from '../../components/productlist/productlisthead'


const ProductListCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  height: 65rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 105rem;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    margin: 0;
  }
`

const Spice = () => {
  
  //GraphlQL
  const data = useStaticQuery(graphql`
  query{
    mdx(
      slug: {
        regex:"/spices/spices/" 
      }
    ){
      frontmatter{
        title
        image{
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
        filter: { fileAbsolutePath: { regex: "/content/products/spices/" } }
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
        <Wrapper topmargin topmarginmobile>
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

export default Spice





