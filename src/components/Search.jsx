import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState, createContext } from "react";

const Search = ({ searchWord }) => {
  //const [filter, setFilter] = useState("");

  const handleOnchange = (e) => {
    //setFilter(e.target.value);
    searchWord(e.target.value);
  };
  return (
    <div>
      <div
        id="search"
        className=" flex items-center justify-between w-[327px] h-[48px] mt-2 mb-4 bg-gray-200 rounded-[30px] border hover:border-purple-600 p-4 md:w-[689px] md:h-[64px]"
      >
        <input
          placeholder="Search for a word"
          // value={filter}
          onChange={handleOnchange}
          type="text"
          className=" m-4 w-[280px] h-[34px] bg-transparent text-[20px] outline-none text-purple-500"
        />
        <BsSearch className="mr-4 text-[20px] text-purple-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
