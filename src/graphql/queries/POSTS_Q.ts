import { gql } from '@apollo/client';

export const POSTS = gql`
  query Posts {
    posts {
      id
      title
      body
      createdAt
      author{
        id
        nickname
      }
    }
  }
`;


