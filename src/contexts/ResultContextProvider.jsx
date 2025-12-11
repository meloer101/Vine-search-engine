import React, { createContext, useState, useContext } from "react";

const ResultContext = createContext();
const baseurl = "https://google-search74.p.rapidapi.com";

// 创建一个结果上下文提供者组件
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JavaScript");

  // 根据类型匹配获取不同的搜索结果
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseurl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "93dd7256femsh0a68777c594d4dcp1ff318jsn16e922e453d3",
        "x-rapidapi-host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await response.json();

    setResults(data.results);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
