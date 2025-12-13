import React, { createContext, useState, useContext } from "react";

const ResultContext = createContext();
const baseurl = "https://google-search74.p.rapidapi.com";

// 创建一个结果上下文提供者组件
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Java");   // 默认搜索词为 "ai",调试区域

  // 根据类型匹配获取不同的搜索结果（已优化：添加错误处理和日志）
  const getResults = async (type) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${baseurl}${type}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": "93dd7256femsh0a68777c594d4dcp1ff318jsn16e922e453d3",
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`API 错误: ${response.status}`);
      }

      const data = await response.json();
      console.log('API 返回数据:', data);  // 在控制台打印响应结构，便于调试

      setResults(data.results || []);  // 如果没有结果，返回空数组（根据 API 结构调整）
    } catch (error) {
      console.error('请求失败:', error);
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
