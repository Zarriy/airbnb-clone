import Image from "next/image";

export default function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} fill alt={title} className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
}
