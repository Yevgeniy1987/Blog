import { gql } from '@apollo/client';

export const TAG = gql`
  query Tag($tagName: string!) {
    tag (where: { name: $tagName }) {
      name
      createdAt
    }
    posts{
        title
    }
  }
`;