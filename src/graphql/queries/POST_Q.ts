import { gql } from '@apollo/client';

export const POST = gql`
  query Post($postId: ID!) {
    post (where: { id: $postId }) {
      id
      title
      body
      author{
        nickname
      }
      comments{
        body
        author
      }
      tags{
        
      }
    }
  }
`;


