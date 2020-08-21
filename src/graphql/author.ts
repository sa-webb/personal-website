import { graphql } from "gatsby"

export const AuthorFragment = graphql`
  fragment AuthorFragment on Site {
    siteMetadata {
      title
      author {
        name
        degree
        email
        number
        profession
        description
        summary
      }
    }
  }
`
