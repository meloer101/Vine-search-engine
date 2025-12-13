import React, { createContext, useState, useContext } from "react";

const ResultContext = createContext();

const API_KEY = "AIzaSyAyezCu-b7Q7nq1VMAGOTqc_LpgYb4tyTg";  // 您的 key
const CX = "630741a5f9b6e412f";                                // 您的 cx
const baseurl = "https://www.googleapis.com/customsearch/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JavaScript");

  // 修改：参数改为 type ("web" 或 "image")
  const getResults = async (type = "web") => {
    setIsLoading(true);

    try {
      const params = new URLSearchParams({
        key: API_KEY,
        cx: CX,
        q: searchTerm || "JavaScript",
        num: "10", // 最多 10 条
      });

      if (type === "image") {
        params.append("searchType", "image");
      }

      const url = `${baseurl}?${params.toString()}`;
      console.log("请求 URL:", url); // 调试用

      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Google API 错误 ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Google API 返回数据:", data);

      setResults(data.items || []);
    } catch (error) {
      console.error("搜索请求失败:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
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
