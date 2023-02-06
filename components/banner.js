import Image from "next/image";
import heroImage from "../public/hero.webp";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image src={heroImage} alt="hero image" fill objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button
          className="text-purple-500 font-bold bg-white px-10 py-4 shadow-md rounded-full my-3 
        hover:shadow-xl active:scale-90 transition duration-150"
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}
