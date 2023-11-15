import { gql } from '@apollo/client';

export const COMMENT = gql`
  query Comment($commentId: ID!) {
    comment (where: { id: $commentId }) {
      id
      body
      author {
        id
        name
      }
    }
  }
`;