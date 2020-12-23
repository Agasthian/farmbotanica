import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CategoryCard from '../../../../components/UI/categoryCard'

export const ProductListCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  height:20rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 100%;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    margin: 0;
  }
`

const ProductlistSub = () => {

   //GraphlQL
   const data = useStaticQuery(graphql`
   query{
      allMdx(
       sort: { fields: [frontmatter___order], order: ASC }
       filter: { fileAbsolutePath: { regex: "/content/productsub/onions/" } }
     ) {
       edges {
         node {
           id
           frontmatter {
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
     }
   }
   `) 


  return (
    <div>
      <ProductListCard>
        {data.allMdx.edges.map(item =>(
            <CategoryCard list key={item.node.id} cardinfo={item.node} />
          ))}
      </ProductListCard>
    </div>
  )
}

export default ProductlistSub
