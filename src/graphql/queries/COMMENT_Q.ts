import { gql } from '@apollo/client';

export const COMMENT = gql`
  query Comment($commentId: ID!) {
    post (where: { id: $commentId }) {
      id
      body
      author{
        nickname
      }
    }
  }
`;