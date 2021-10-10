import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = (props) => {
  let image = props.src;

  const data = useStaticQuery(graphql`
    query ($image: String) {
      placeholderImage: file(relativePath: { eq: $image }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={{ ...data.placeholderImage.childImageSharp.fluid}} 
            style={{height: props.height, width: props.width}}          
            imgStyle={{objectFit: "contain"}}/>
}

export default Image
