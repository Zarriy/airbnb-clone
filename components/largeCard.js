import Image from "next/image";

export default function LargeCard({ img, title, description, button }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="Get Insired by Our Curated List"
          fill
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 rounded-lg mt-5 px-4 py-2">
          {button}
        </button>
      </div>
    </section>
  );
}
