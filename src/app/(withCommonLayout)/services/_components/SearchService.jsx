"use client";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchService = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  console.log(pathname);

  // Search Function
  const handleSubmint = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }

    router.push(`${pathname}?${params}`);
  };

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.forward()}>Forward</button>
      <form className="flex itece  " onSubmit={handleSubmint}>
        <input
          name="search"
          type="text"
          placeholder="Search Here"
          className="py-4 px-2 rounded-xl shadow w-50 focus:outline-none focus:border-purple-400
           focus:border hover:border-r-4 hover:border-l-4   hover:border-amber-400 placeholder:text-purple-300  transition duration-700 bg-white text-black  "
        />
        <button className="bg-purple-800 border-2 border-purple-600 py-4 px-4 rounded-xl ml-5 ">
          <SearchIcon></SearchIcon>
        </button>
      </form>
    </div>
  );
};

export default SearchService;
