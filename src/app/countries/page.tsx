import { COUNTRIES, COUNTRY_INFO } from "@/graphql/queries/COUNTRIES_Q";
import { apolloClient } from "@/lib/apolloClient";
import Link from "next/link";

export default async function Countries() {
  const { data } = await apolloClient.query({ query: COUNTRIES });

  const countries = data.countries;
 
  return (
    <div>
      <h1 className="text-xl uppercase">Countries</h1>

      <ol className="mt-4 list-decimal">
        {countries.map((country: any) => (
          <li key={country.name}>
            <h2>
              <Link href={ COUNTRY_INFO } className="hover:underline">
                {country.name}
              </Link>
            </h2>
          </li>

          // <li key={country.name}>{country.name}</li>
        ))}
      </ol>
    </div>
  );
}
