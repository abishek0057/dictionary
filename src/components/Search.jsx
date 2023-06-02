import React, { useRef, useEffect } from "react";
import search from "../assets/icon-search.svg";

const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchData = async (word) => {
  try {
    const response = await fetch(baseUrl + word);
    if (response.status === 404) {
      const data = await response.json();
      return [data, 404];
    }
    const data = await response.json();
    return [data, 200];
  } catch (error) {
    console.log(error);
  }
};

const Search = ({ setResult, input, setInput }) => {
  const searchBoxRef = useRef();

  const handleInputFocus = () => {
    searchBoxRef.current?.select();
  };

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMeaning(input);
    }
  };

  const searchMeaning = async () => {
    setResult(null);
    try {
      const result = await fetchData(input);
      setResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMeaning();
  }, []);

  return (
    <div className='p-3 sm:mt-5 flex justify-center bg-gray-200 rounded-lg mx-2 dark:bg-slate-700'>
      <input
        autoFocus
        ref={searchBoxRef}
        type='text'
        value={input}
        className='w-full bg-gray-200 indent-2 outline-none sm:text-xl dark:bg-slate-700'
        placeholder='Search for any words...'
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button className='p-2 select-none' onClick={searchMeaning}>
        <img src={search} alt='search-logo' />
      </button>
    </div>
  );
};

export default Search;
