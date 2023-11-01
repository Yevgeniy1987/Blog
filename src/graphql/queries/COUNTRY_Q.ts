import { gql } from '@apollo/client';
import { COUNTRY_F } from '@/graphql/fragments/COUNTRY_F';

export const COUNTRY = gql`
  ${COUNTRY_F}
  query Country($code: String!) {
    countries(filter: { code: { eq: $code } }) {
      ...CountryFields
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
