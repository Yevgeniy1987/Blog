import { COUNTRIES } from "@/graphql/queries/COUNTRIES_Q";
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
          <li key={country.code}>
            <h2>
              <Link href={`/countries/${country.code}`} className="hover:underline">
                {country.name}
              </Link>
            </h2>
          </li>
        ))}
      </ol>
    </div>
  );
}
