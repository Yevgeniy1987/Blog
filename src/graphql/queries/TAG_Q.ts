import { gql } from '@apollo/client';

export const TAG = gql`
  query Post($tagName: string!) {
    post (where: { name: $tagName }) {
      name
      createdAt
    }
  }
`;