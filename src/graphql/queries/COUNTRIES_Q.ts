import { COUNTRY_F } from '@/graphql/fragments/COUNTRY_F';
import { gql } from '@apollo/client';

export const COUNTRIES = gql`
  ${COUNTRY_F}
  query Countries {
    countries {
      ...CountryFields
    }
  }
`;


