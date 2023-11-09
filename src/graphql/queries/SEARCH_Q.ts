import { gql } from "@apollo/client";

export const SEARCH = gql`
  query FilteredPosts($options: postTitle) {
    posts(options: $options) {
        id
        title
        body
        author{
          nickname
        }
        comments{
          body
          author
        }
        tags{
          
        }
    }
  }
`;
