exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const aboutUsTemplate = require.resolve(`./src/templates/AboutUs.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Erreur au run des queries dans gatsby-node`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: aboutUsTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }



// const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions;

//     if (node.internal.type === `MarkDownRemark`) {
//         const slug = createFilePath({ node, getNode, basePath: `content` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug,
//         })
//     }
// }

// exports.createPages = async function ({ actions, graphql }) {
//     const result = await graphql(`
//         query {
//             allMarkDownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     result.data.allMarkDownRemark.edges.array.forEach(edge => {
//         const { slug } = edge.node.fields
//         actions.createPage({
//             path: slug,
//             component: require.resolve(`./src/templates/AboutUs.js`),
//             context: { slug: slug },
//         })
//     });
// }










// exports.createPages = async ({ actions, graphql, reporter}) => {

//     // console.log("entrée fct create pages")

//     const { createPage } = actions;

//     const AboutUs = path.resolve(`./src/templates/AboutUs.js`);

//     console.log(AboutUs)

//     console.log(graphql)


//         const result = await graphql(`
//     {
//         allMarkdownRemark {
//             edges {
//                 node {
//                     frontmatter {
//                         path
//                     }
//                 }
//             }
//         }
//     }
// `)

// if (result.errors) {
//     reporter.panicOnBuild("Error au lancement des queries GraphQl.")
//         return
// };

// result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//         path: node.frontmatter.path,
//         component: AboutUs,
//         context: {}

//     })
// })
    
// }


