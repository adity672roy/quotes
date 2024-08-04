import React from "react";

const SavedQuotes = ({ savedQuotes, setSavedQuotes }) => {
  const handleDelete = (quoteIndex) => {
    setSavedQuotes(savedQuotes.filter((quote, index) => index !== quoteIndex));
  };
  return (
    <div className="mt-8">
      {savedQuotes.length > 0 && 
      <h2 className="text-2xl font-bold mb-4">Saved Quotes</h2>
      }
      <ul className="space-y-2">
        {savedQuotes.map((quote, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow flex gap-4 justify-between items-center"
          >
            <p>{quote}</p>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 px-2 text-white cursor-pointer"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotes;
