import { useState } from "react";
import Image from "next/image";
import logo from "../public/airbnb-logo.png";
import {
  UsersIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export default function Header({ placeholder }) {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetSearch = () => {
    setSearch("");
  };

  const searchRouter = () => {
    router.push({
      pathname: "/search",
      query: {
        location: search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:px-10">
      <div
        className="relative h-10 flex items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder || "Start your search"}
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-slate-400 w-full sm:w-auto"
        />
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
      {search && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min={1}
              types="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetSearch} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={searchRouter} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
