import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import SavedQuotes from "./components/SavedQuotes";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    const data = await response.json();
    setQuote(data[0]);
  };

  const handleSave = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <QuoteCard quote={quote} onSave={handleSave} />
        <button
          onClick={fetchQuote}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
        >
          New Quote
        </button>
      </div>
      <SavedQuotes savedQuotes={savedQuotes} setSavedQuotes={setSavedQuotes} />
    </div>
  );
};

export default App;
