import { gql } from "@apollo/client";

export const COUNTRIES = gql`
  query Countries {
    countries {
      name
    }
  }
`;

export const COUNTRY_INFO = gql`query {
  countries (filter: {code: {eq: "AD"}}) {
    name
    code
  }
}`;
