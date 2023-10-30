import { COUNTRIES } from "@/graphql/queries/COUNTRIES_Q";
import { apolloClient } from "@/lib/apolloClient";
import { Metadata } from "next";

type Props = {
  params: {
    code: string;
  };
};

async function getCountryInfo(code: string) {
  const COUNTRY_INFO = `query {
    countries (filter: {code: {eq: "${code}"}}) {
      name
      code
    }
  }`;
  const { data } = await apolloClient.query({ query: COUNTRY_INFO });

  const countryInfo = data.country;

  return countryInfo.map((country: { code: string }) => ({
    code: country.code.toString(),
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const countryCode = params.code;

  const country = await getCountryInfo(countryCode);

  return {
    title: country.title,
  };
}

export async function generateStaticParams() {
  const { data } = await apolloClient.query({ query: COUNTRIES });

  const countries = data.countries;

  return countries.map((country: { code: string }) => ({
    code: country.code.toString(),
  }));
}

export default async function Country({ params }: Props) {
  const countryCode = params.code;

  const country = await getCountryInfo(countryCode);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl uppercase">{country.name}</h1>
      <p>
        {country.continent.name}
        {country.language.name}
      </p>
    </div>
  );
}
