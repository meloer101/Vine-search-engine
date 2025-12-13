import React, { createContext, useState, useEffect, useCallback } from "react";

const ResultContext = createContext();

const API_KEY = "AIzaSyAyezCu-b7Q7nq1VMAGOTqc_LpgYb4tyTg"; // 您的 key
const CX = "630741a5f9b6e412f"; // 您的 cx
const baseurl = "https://www.googleapis.com/customsearch/v1";
const ITEMS_PER_PAGE = 10; // Google API 最大支持 10 条/页

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JavaScript");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchType, setSearchType] = useState("web");

  // 根据当前页码和搜索类型获取结果
  const getResults = useCallback(
    async (type = "web", page = 1) => {
      setIsLoading(true);
      setSearchType(type);
      setCurrentPage(page);

      try {
        // 计算起始索引 (Google API 使用 1-based 索引)
        const start = (page - 1) * ITEMS_PER_PAGE + 1;

        const params = new URLSearchParams({
          key: API_KEY,
          cx: CX,
          q: searchTerm || "JavaScript",
          num: ITEMS_PER_PAGE.toString(),
          start: start.toString(),
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

        // 保存结果和总结果数
        setResults(data.items || []);
        setTotalResults(data.searchInformation?.totalResults || 0);
      } catch (error) {
        console.error("搜索请求失败:", error);
        setResults([]);
        setTotalResults(0);
      } finally {
        setIsLoading(false);
      }
    },
    [searchTerm]
  );

  // 当搜索词或类型改变时，重置到第一页
  useEffect(() => {
    getResults(searchType, 1);
  }, [searchTerm, searchType, getResults]);

  // 计算总页数
  const totalPages = Math.min(Math.ceil(totalResults / ITEMS_PER_PAGE), 10); // Google API 限制最多 100 条结果

  // 切换页面
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      getResults(searchType, page);
    }
  };

  // 切换搜索类型
  const changeSearchType = (type) => {
    setSearchType(type);
    getResults(type, 1);
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        isLoading,
        searchTerm,
        setSearchTerm,
        getResults,
        currentPage,
        totalPages,
        totalResults,
        changePage,
        searchType,
        changeSearchType,
        ITEMS_PER_PAGE,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

// 导出上下文和提供者
export { ResultContext, ResultContextProvider };
