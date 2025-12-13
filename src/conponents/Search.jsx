import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Search = () => {
  const [input, setInput] = useState("");
  const { setSearchTerm } = useResultContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchTerm(input);
      navigate("/search");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
      >
        <div className="grow px-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="搜索网页、图片..."
            className="w-full py-4 px-2 text-lg border-none outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center"
        >
          🔍
        </button>
      </form>
    </div>
  );
};
