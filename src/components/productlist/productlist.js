import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const Productlist = () => {
  const data = useStaticQuery(graphql`
  query{
    allMdx(filter: {fileAbsolutePath: {regex: "/content/category/spices/"}}) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fixed(width: 300, height: 425) {
                  ...GatsbyImageSharpFixed_tracedSVG
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
      {data.allMdx.edges.map((edge)=>{
        return(
          <>
            <h1>{edge.node.frontmatter.title}</h1>
            <Img fixed={edge.node.frontmatter.image.childImageSharp.fixed}/>
          </>
        )
      })
      }     
    </div>
  )
}

export default Productlist
