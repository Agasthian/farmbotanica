import React from 'react'
import styled from 'styled-components'
import { useStaticQuery,graphql } from "gatsby"

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
        regex:"/flower/flower/"
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
  }
  `)

  const {title, image} = data.mdx.frontmatter 
  const props = {
    title : title,
    image : image
  }

  
  return (
    <>
     <Head title="Flower" />
     <Layout>
        <Wrapper topmargin topmarginmobile>
          <Container>
            <ProductListHead {...props}  />
          </Container>
        </Wrapper> 
      </Layout>
    </>
  )
}

export default Spice





