import React from 'react'

import { useStaticQuery,graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

import Head from "../../components/head"
import Layout from "../../components/layout/layout"
import { Wrapper, Container,ProductListWrapper,ProductListHeadingWrapper,ProductListContent,ProductListHeading,ProductListHeadingH1,ProductListHeadingH3,ProductListHeadingP,ProductListImg,ProductListBackLink } from "../../components/layout/element"


const Spice = () => {
  
  //GraphlQL
  const data = useStaticQuery(graphql`
  query{
    mdx(
      slug: {
        regex:"/plantationcrop/plantation/"
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

 

  
  return (
    <>
     <Head title="Plantation Crops" />
     <Layout>
        <Wrapper topmargin topmarginmobile>
          <Container>
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
          </Container>
        </Wrapper> 
      </Layout>
    </>
  )
}

export default Spice





