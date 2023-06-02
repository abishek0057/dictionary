import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Meaning from "./components/Meaning";
import Loading from "./components/Loading";
import NoMeaning from "./components/NoMeaning";

const App = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("keyboard");
  return (
    <div className='sm:max-w-2xl mx-auto'>
      <Navbar />
      <Search setResult={setResult} input={input} setInput={setInput} />
      {result != null ? (
        result[1] === 404 ? (
          <NoMeaning result={result[0]} input={input} />
        ) : (
          <Meaning result={result[0]} />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;

