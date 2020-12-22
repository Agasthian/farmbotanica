import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import CategoryCard from '../../../../components/UI/categoryCard'
import { ProductListCard } from "../../../../themes/utils"

const ProductlistSub = () => {

   //GraphlQL
   const data = useStaticQuery(graphql`
   query{
      allMdx(
       sort: { fields: [frontmatter___order], order: ASC }
       filter: { fileAbsolutePath: { regex: "/content/productsub/native/" } }
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
