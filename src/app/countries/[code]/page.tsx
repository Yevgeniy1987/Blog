import { COUNTRIES } from '@/graphql/queries/COUNTRIES_Q';
import { COUNTRY } from '@/graphql/queries/COUNTRY_Q';
import { apolloClient } from '@/lib/apolloClient';
import { Metadata } from 'next';
import { notFound } from 'next/navigation'

type Props = {
  params: {
    code: string;
  };
};

async function getCountryInfo(code: string) {
  const { data } = await apolloClient.query({
    query: COUNTRY,
    variables: { code }
  });

  const countryInfo = data.countries[0];

  return countryInfo;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const countryCode = params.code;

  const country = await getCountryInfo(countryCode);

  return {
    title: country?.name || 'Unknown Country'
  };
}

export async function generateStaticParams() {
  const { data } = await apolloClient.query({ query: COUNTRIES });

  const countries = data.countries;

  return countries.map((country: { code: string }) => ({
    code: country.code
  }));
}

export default async function Country({ params }: Props) {
  const countryCode = params.code;

  const country = await getCountryInfo(countryCode);

  if (!country) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl uppercase">{country.name}</h1>

      <p>Continent: {country.continent.name}</p>
      <p>
        Languages:{' '}
        {country.languages.map((language: any) => language.name).join(', ')}
      </p>
    </div>
  );
}
