"use client";
import React from "react";

const SearchService = () => {
    const handleSubmint = (e) => {
        e.preventDefault()
        const search = e.target.search.value;

        console.log(search);
        
  };

  return (
    <div>
      <form onSubmit={handleSubmint}>
        <input
          name="search"
          type="text"
          placeholder="Search Here"
          className="py-4 px-2 rounded-xl shadow w-[200px] bg-white text-black  "
        />
        <button className="bg-purple-800 p-2 rounded-xl ml-5 ">Search</button>
      </form>
    </div>
  );
};

export default SearchService;
