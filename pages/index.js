import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/header";
import Banner from "@/components/banner";
import SmallCard from "@/components/smallCard";
import MediumCard from "@/components/mediumCard";
import LargeCard from "@/components/largeCard";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, liveAnywhere }) {
  console.log(exploreData);
  return (
    <>
      <Head>
        <title>airbnb app</title>
        <meta
          name="description"
          content="Stay safe with airbnb at affordable price"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airbnb.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, i) => (
              <SmallCard key={i} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhere?.map(({ title, img }) => (
              <MediumCard key={title} title={title} img={img} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoor"
          description="Wishlist curated by Airbnb"
          button="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/BUDC").then(
    (res) => res.json()
  );
  const liveAnywhere = await fetch("https://www.jsonkeeper.com/b/6NM6").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      liveAnywhere,
    },
  };
}
