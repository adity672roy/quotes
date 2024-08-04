import React from "react";

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-6 transform transition duration-500 hover:scale-105">
      <p className="text-gray-700 text-lg mb-4 italic">"{quote}"</p>
      <div className="flex justify-end">
        <button
          onClick={onSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
