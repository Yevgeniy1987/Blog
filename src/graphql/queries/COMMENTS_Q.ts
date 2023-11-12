import { gql } from "@apollo/client";

export const COMMENTS = gql`
  query Comments {
    comments {
      id
      body
      createdAt
      author {
        id
        nickname
      }
      post {
        title
        body
      }
    }
  }
`;
