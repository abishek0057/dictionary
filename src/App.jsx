import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MainBody from "./components/MainBody";
import Loading from "./components/Loading";

const App = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  return (
    <div className='sm:max-w-2xl mx-auto'>
      <Navbar />
      <Search setResult={setResult} setError={setError} />
      {result ? <MainBody result={result} /> : <Loading />}
    </div>
  );
};

export default App;

