import Image from "next/image";

export default function SmallCard({ img, location, distance }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105
    transition transfrom ease-out duration-200"
    >
      <div className="relative h-16 w-16">
        <Image src={img} fill alt={location} className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
}
