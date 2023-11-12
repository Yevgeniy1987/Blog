import { gql } from "@apollo/client";

export const TAG = gql`
  query Tag($tagName: String!) {
    tag(where: { name: $tagName }) {
      name
      createdAt
      posts {
        id
        title
      }
    }
  }
`;
