import React from 'react'
import styled from 'styled-components'
import { useStaticQuery,graphql,Link } from "gatsby"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"


import CategoryCard from '../../components/UI/categoryCard'
import Button from '../../components/UI/button'
import Head from "../../components/head"
import Layout from "../../components/layout/layout"
import { Wrapper, Container } from "../../components/layout/element"
import ProductListHead from '../../components/productlist/productlisthead'
import {StyledIconButton,CenterAlign} from '../../themes/utils'


const ProductListCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  height: 45rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 100%;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    margin: 0;
  }
`

const Fruits = () => {
  
  //GraphlQL
  const data = useStaticQuery(graphql`
  query{
    mdx(
      slug: {
        regex:"/freshfruits/fruits/"
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
      filter: { fileAbsolutePath: { regex: "/content/products/fruits/" } }
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
     <Head title="Fruits" />
     <Layout>
        <Wrapper topmargin topmarginmobile bottommargin>
          <Container>
          <ProductListHead {...props}  />
            <ProductListCard>
              {data.products.edges.map(item =>(
                <CategoryCard list key={item.node.id} cardinfo={item.node} />
              ))}
            </ProductListCard>
            <CenterAlign>
              <Link to='/contact'> 
                <Button large>
                  Make an Enquiry 
                  <StyledIconButton icon={faArrowCircleRight} size="1x" />
                </Button>
              </Link>
            </CenterAlign>
          </Container>
        </Wrapper> 
      </Layout>
    </>
  )
}

export default Fruits





