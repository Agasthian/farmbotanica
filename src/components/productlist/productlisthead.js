import React from 'react'
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { ProductListWrapper,ProductListHeadingWrapper,ProductListContent,ProductListHeading,ProductListHeadingH1,ProductListHeadingH3,ProductListHeadingP,ProductListImg,ProductListBackLink } from "../layout/element"


  //GraphQL : Using Dynamic query to fetch data based on the slug - Video guide - Andrew mead io - Gatsbyjs -YT
  // export const query = graphql`
  // query($slug:String!){
  //   mdx(
  //     slug: {
  //       regex:$slug
  //     }
  //   ){
  //     frontmatter{
  //       title
  //     }
  //   }
  // }
  // ` 

const ProductlistHead = ({title, image}) => {
  
  return (
    <>
      <ProductListWrapper>
        <ProductListHeadingWrapper>
          <ProductListContent>
            <ProductListBackLink to='/category_page'>
            <FontAwesomeIcon icon={faArrowCircleLeft} size='1x'/>  Category
            </ProductListBackLink>
            <ProductListHeading>
            <ProductListHeadingH1>
              {title}
            </ProductListHeadingH1> 
            <ProductListHeadingH3>Product List</ProductListHeadingH3>
            <ProductListHeadingP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis temporibus, amet repellat </ProductListHeadingP>
            </ProductListHeading>
          </ProductListContent>
          <ProductListImg fluid={image.childImageSharp.fluid}/>
        </ProductListHeadingWrapper>
      </ProductListWrapper>
 
    </>
  )
}

export default ProductlistHead
