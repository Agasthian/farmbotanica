import React from 'react'
import styled from 'styled-components'
import { useStaticQuery,graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

import CategoryCard from '../../components/UI/categoryCard'
import Head from "../../components/head"
import Layout from "../../components/layout/layout"
import { Wrapper, Container,ProductListImg,ProductListWrapper,ProductListHeadingWrapper,ProductListContent,ProductListHeading,ProductListHeadingH1,ProductListHeadingH3,ProductListHeadingP,ProductListBackLink } from "../../components/layout/element"


const CardWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  height: 65rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 80rem;
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
 
    
  return (
    <>
     <Head title="Spices" />
     <Layout>
        <Wrapper topmargin topmarginmobile>
          <Container>
            {/* Comment : Product list hero section */}
            <ProductListWrapper>
              <ProductListHeadingWrapper>
                <ProductListContent>
                  <ProductListBackLink to='/category_page'>
                  <FontAwesomeIcon icon={faArrowCircleLeft} size='1x'/>  Category
                  </ProductListBackLink>
                  <ProductListHeading>
                  <ProductListHeadingH1>
                    {data.mdx.frontmatter.title}
                  </ProductListHeadingH1> 
                  <ProductListHeadingH3>Product List</ProductListHeadingH3>
                  <ProductListHeadingP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis temporibus, amet repellat </ProductListHeadingP>
                  </ProductListHeading>
                </ProductListContent>
                <ProductListImg fluid={data.mdx.frontmatter.image.childImageSharp.fluid}/>
              </ProductListHeadingWrapper>
            </ProductListWrapper>

            {/* Product list data */}
            <CardWrapper>
              {data.products.edges.map(item =>(
                <CategoryCard list key={item.node.id} cardinfo={item.node} />
              ))}
            </CardWrapper>
          </Container>
          
        </Wrapper> 
      </Layout>
    </>
  )
}

export default Spice





