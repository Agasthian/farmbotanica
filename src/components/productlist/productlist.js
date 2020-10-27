import React from 'react'
import Img from "gatsby-image"
import { graphql } from "gatsby"


  //GraphQL : Using Dynamic query to fetch data based on the slug - Video guide - Andremead - Gatsbyjs -YT
  export const query = graphql`
  query($slug:String!){
    mdx(
      slug: {
        regex:$slug
      }
    ){
      frontmatter{
        title
      }
    }
  }
  ` 

const Productlist = (props) => {
  
  return (
    <div>
      {/* <h1>{props.data.mdx.frontmatter.title}</h1> */}

      {/* {data.allMdx.edges.map((edge)=>{
        return(
          <>
            <h1>{edge.node.frontmatter.title}</h1>
            <Img fixed={edge.node.frontmatter.image.childImageSharp.fixed}/>
          </>
        )
      })
      }      */}
    </div>
  )
}

export default Productlist
