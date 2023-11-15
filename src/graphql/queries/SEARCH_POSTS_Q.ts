import { gql } from '@apollo/client';

export const SEARCH_POSTS = gql`
  query SearchPosts($q: String) {
    posts(where: { title: { contains: $q } }) {
      id
      title
      body
      author {
        id
        nickname
      }
      comments {
        id
        body
        author {
          id
          name
        }
      }
      tags {
        name
      }
    }
  }
`;
