import { gql } from "@apollo/client";

export const SEARCH_TAGS = gql`
query SearchTags($q: String) {
  tags(where: { name: { contains: $q } }) {
    tags {
      name
      createdAt
      posts {
        id
        title
        body
      }
    }
  }
`;
