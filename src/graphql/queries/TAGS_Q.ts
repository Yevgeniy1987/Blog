import { gql } from "@apollo/client";

export const TAGS = gql`
  query Tags {
    tags {
      name
      createdAt
      post {
        title
        body
      }
    }
  }
`;
