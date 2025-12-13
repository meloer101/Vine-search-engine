import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./Loading";
import { useResultContext } from "../contexts/useResultContext";
import Pagination from "./Pagination";

export const Results = () => {
  const {
    results,
    isLoading,
    getResults,
    searchTerm,
    currentPage,
    totalPages,
    changePage,
    totalResults,
  } = useResultContext();
  const location = useLocation();

  // 关键修复：根据当前路径决定搜索类型
  useEffect(() => {
    if (searchTerm) {
      const type = location.pathname === "/images" ? "image" : "web";
      getResults(type);
    }
  }, [searchTerm, location.pathname, getResults]); // 依赖 searchTerm、路径和 getResults

  if (isLoading) return <Loading />;

  // 网页搜索
  if (location.pathname === "/search") {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          找到约 {totalResults} 条结果 (搜索: "{searchTerm}")
        </div>
        <div className="space-y-8">
          {results?.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${
                      item.displayLink || item.link
                    }&sz=16`}
                    alt="Website Icon"
                    className="w-4 h-4 mr-2"
                  />
                  <span>{item.displayLink || item.link}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {item.title || "无标题"}
                </h3>
                <p className="font-poppins font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.snippet || "无描述"}
                </p>
              </a>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      </div>
    );
  }

  // 图片搜索
  if (location.pathname === "/images") {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          找到约 {totalResults} 张图片 (搜索: "{searchTerm}")
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results?.map((item, index) => (
            <a
              key={index}
              href={item.link} // 原图页面
              target="_blank"
              rel="noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* 图片容器 */}
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img
                  src={item.image?.thumbnailLink}
                  alt={item.title || "图片"}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* 图片信息 */}
              <div className="p-4">
                <p className="text-sm text-gray-900 dark:text-white truncate">
                  {item.title || "无标题"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                  {item.displayLink || item.link}
                </p>
              </div>
            </a>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      </div>
    );
  }

  // 其他搜索类型（新闻和视频）
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {location.pathname === "/news" ? "新闻搜索" : "视频搜索"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {location.pathname === "/news"
            ? "新闻搜索功能正在开发中，敬请期待！"
            : "视频搜索功能正在开发中，敬请期待！"}
        </p>
      </div>
    </div>
  );
};
