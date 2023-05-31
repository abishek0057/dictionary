import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  return (
    <div className='sm:max-w-2xl mx-auto'>
      <Navbar />
      <Search setResult={setResult} setError={setError} />
    </div>
  );
};

export default App;

