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
        }
      }
    }
  }
`
