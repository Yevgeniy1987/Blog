import { gql } from '@apollo/client';

export const POST = gql`
  query Post($postId: ID!) {
    post(where: { id: $postId }) {
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
      likes
    }
  }
`;
