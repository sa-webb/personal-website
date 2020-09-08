import { graphql } from "gatsby"

export const AuthorFragment = graphql`
  fragment AuthorFragment on Site {
    siteMetadata {
      title
      author {
        name
        degree
        major
        minor
        profession
        description
        summary
      }
    }
  }
`
