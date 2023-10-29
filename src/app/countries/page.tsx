import { COUNTRIES } from '@/graphql/queries/COUNTRIES_Q';
import { apolloClient } from '@/lib/apolloClient';

export default async function Countries() {
  const { data } = await apolloClient.query({ query: COUNTRIES });

  const countries = data.countries;

  return (
    <div>
      <h1 className="text-xl uppercase">Countries</h1>

      <ol className="mt-4 list-decimal">
        {countries.map((country: any) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ol>
    </div>
  );
}
