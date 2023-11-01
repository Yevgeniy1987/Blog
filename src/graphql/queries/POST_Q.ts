import { gql } from '@apollo/client';

export const POST = gql`
  query Post($postId: ID!) {
    post (where: { id: $postId }) {
      id
    }
  }
`;


