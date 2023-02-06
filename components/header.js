import Image from "next/image";
import logo from "../public/airbnb-logo.png";
import {
  MenuIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:px-10">
      <div className="relative h-10 flex items-center cursor-pointer">
        <Image
          src={logo}
          alt="airbnb logo"
          fill
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center border-2 rounded-full shadow-sm py-2">
        <input
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-slate-400 w-full sm:w-auto"
        ></input>
        <MagnifyingGlassIcon className="cursor-pointer md:mx-2 h-8 bg-red-400 rounded-full p-1 text-white hidden md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
