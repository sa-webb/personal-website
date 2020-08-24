import { graphql } from "gatsby"

export const CategoryFragment = graphql`
  fragment CategoryFragment on MarkdownRemarkConnection {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          featuredImage {
            childImageSharp {
              sizes(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
