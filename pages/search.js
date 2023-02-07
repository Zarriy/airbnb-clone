import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import format from "date-fns/format";
import InfoCard from "@/components/infoCard";
import Mapp from "@/components/map";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const startDateFormatted = format(new Date(startDate), "dd MMMM yy");
  const endDateFormatted = format(new Date(endDate), "dd MMMM yy");
  const range = `${startDateFormatted} - ${endDateFormatted}`;

  return (
    <>
      <Head>
        <title>airbnb Search</title>
        <meta name="description" content="Searching your desired location" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airbnb.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${startDateFormatted} - ${endDateFormatted} | ${guests}`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">{range}</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Types of Places</p>
            <p className="button">Prices</p>
            <p className="button">Rooms</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item, i) => (
              <InfoCard {...item} key={i} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px] xl:max-h-[600px]">
          <Mapp searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
