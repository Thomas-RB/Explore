import React from "react"
import { graphql } from "gatsby"


import Navbar from "../components/Navbar/navbar"
import Sidebar from "../components/Sidebar/sidebar"
import Footer from "../components/Footer/footer"

import SEO from "../components/seo"


const AboutUs = ({ data }) => {
  const { markDownRemark } = data
  const { frontmatter, html } = markDownRemark

  return (

    <>
      <SEO title={frontmatter.title} />
      <Navbar />
      <Sidebar />

        <h1>
          {frontmatter.title}
        </h1>

        <div 
          dangerouslySetInnerHTML={{ __html: html }}
        />

      <Footer />
    </>
  );
}

export default AboutUs


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: {eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        abstract
      }
    }
  }
`


// export default function AboutUs({ data }) {

//     const { markdownRemark } = data;
//     const { frontmatter, html } = markdownRemark;

//     const data1 = useStaticQuery(graphql`
//       query($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: "../markdown/aboutUs.md" } }) {
//              html
//              frontmatter {
//                  path
//                  title
//                  abstract
//              }
//            }
//          }
//     `)

//     return (

//       <>
//         <SEO title={frontmatter.title} />
  
//         <Navbar />
//         <Sidebar />
  
//           <h1>
//             {frontmatter.title}
//           </h1>
  
//           <div 
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
  
  
//         <Footer />
//       </>

//     )
// }
