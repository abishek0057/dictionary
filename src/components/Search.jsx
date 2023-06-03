import React, { useRef, useEffect, useState } from "react";
import search from "../assets/icon-search.svg";
import TextValidation from "./textValidation";

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
  const [isValid, setIsValid] = useState(true);
  const searchBoxRef = useRef();

  const handleInputFocus = () => {
    searchBoxRef.current?.select();
  };

  const handleInputChange = (e) => {
    const checkSpace = /^\s+$/;
    const checkSymbol = /^[^\w\s]/;
    checkSpace.test(e.target.value) || checkSymbol.test(e.target.value)
      ? setIsValid(false)
      : setIsValid(true);
    setInput(e.target.value.toLowerCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMeaning(input);
    }
  };

  const searchMeaning = async () => {
    if (isValid && input !== "") {
      setResult(null);
      localStorage.setItem("word", input);
      try {
        const result = await fetchData(input);
        setResult(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    searchMeaning();
  }, []);

  return (
    <div>
      <div className='p-3 sm:mt-5 flex justify-center bg-gray-200 rounded-lg mx-2 dark:bg-slate-700'>
        <input
          autoFocus
          ref={searchBoxRef}
          type='text'
          value={input}
          className={`w-full bg-gray-200 indent-2 outline-none sm:text-xl dark:bg-slate-700 ${
            !isValid ? "text-red-600" : "text-white"
          }`}
          placeholder='Search for any words...'
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button className='p-2 select-none' onClick={searchMeaning}>
          <img src={search} alt='search-logo' />
        </button>
      </div>
      {!isValid && <TextValidation />}
    </div>
  );
};

export default Search;
