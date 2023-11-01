import { gql } from "@apollo/client";

export const COUNTRY_F = gql`
  fragment CountryFields on Country {
    name
    code
  }
`;
