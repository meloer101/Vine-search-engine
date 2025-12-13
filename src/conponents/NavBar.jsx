import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search";

export const NavBar = ({ darkTheme, setDarkTheme }) => {
  const location = useLocation();

  return (
    <div className="p-5 pb-0 flex flex-col items-center border-b dark:border-gray-700 border-gray-200">
      {/* 顶部导航栏 */}
      <div className="flex justify-between items-center space-x-5 w-full max-w-6xl">
        {/* Logo Section */}
        <Link to="/search">
          <p
            className="
    text-2xl
    font-bold
    text-white
    py-1
    px-4
    rounded-lg
    shadow-md
    hover:shadow-lg
    transition-all
    duration-300

    bg-linear-to-r
    from-blue-100
    to-blue-600

    dark:from-blue-600
    dark:to-blue-800
  "
          >
            Vine Search 🔍
          </p>
        </Link>

        {/*dark mode toggle button */}
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-lg dark:bg-gray-700 dark:text-gray-200 bg-white border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          {darkTheme ? (
            <>
              <span>🌙</span>
              <span>深色</span>
            </>
          ) : (
            <>
              <span>💡</span>
              <span>浅色</span>
            </>
          )}
        </button>
      </div>

      {/* 搜索栏 */}
      <Search />

      {/* 搜索类型导航 */}
      <div className="w-full max-w-6xl mt-4 mb-2">
        <nav className="flex space-x-8 overflow-x-auto py-2">
          <Link
            to="/search"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${location.pathname === "/search"
                ? "text-blue-500 dark:text-blue-400 font-medium border-b-2 border-blue-500 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
          >
            <span>🌐</span>
            <span>网页</span>
          </Link>
          <Link
            to="/images"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${location.pathname === "/images"
                ? "text-blue-500 dark:text-blue-400 font-medium border-b-2 border-blue-500 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
          >
            <span>🖼️</span>
            <span>图片</span>
          </Link>
          <Link
            to="/news"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${location.pathname === "/news"
                ? "text-blue-500 dark:text-blue-400 font-medium border-b-2 border-blue-500 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
          >
            <span>📰</span>
            <span>新闻</span>
          </Link>
          <Link
            to="/videos"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${location.pathname === "/videos"
                ? "text-blue-500 dark:text-blue-400 font-medium border-b-2 border-blue-500 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
          >
            <span>🎬</span>
            <span>视频</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};
