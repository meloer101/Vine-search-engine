import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./Loading";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  // 关键修复：根据当前路径决定搜索类型
  useEffect(() => {
    if (searchTerm) {
      const type = location.pathname === "/images" ? "image" : "web";
      getResults(type);
    }
  }, [searchTerm, location.pathname]); // 依赖 searchTerm 和路径

  if (isLoading) return <Loading />;

  // 网页搜索
  if (location.pathname === "/search") {
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
        {results?.map((item, index) => (
          <div key={index} className="md:w-2/5 w-full">
            <a href={item.link} target="_blank" rel="noreferrer">
              <p className="text-sm">
                {item.link?.length > 30
                  ? item.link.substring(0, 30) + "..."
                  : item.link || "无链接"}
              </p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                {item.title || "无标题"}
              </p>
              <p className="text-md text-gray-600">
                {item.snippet || "无描述"}
              </p>
              {/* 可选：显示网页缩略图 */}
              {item.pagemap?.cse_thumbnail?.[0]?.src && (
                <img
                  src={item.pagemap.cse_thumbnail[0].src}
                  alt="thumbnail"
                  className="mt-3 w-48 rounded"
                />
              )}
            </a>
          </div>
        ))}
      </div>
    );
  }

  // 图片搜索
  if (location.pathname === "/images") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {results?.map((item, index) => (
          <a
            key={index}
            href={item.link} // 原图页面
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            {/* Google 提供的缩略图 */}
            <img
              src={item.image?.thumbnailLink}
              alt={item.title || "图片"}
              loading="lazy"
              className="max-w-xs max-h-64 object-cover rounded shadow hover:shadow-lg transition"
            />
            <p className="text-sm mt-1 text-center wrap-break-word w-64">
              {item.title || "无标题"}
            </p>
          </a>
        ))}
      </div>
    );
  }

  return <div className="text-center mt-10">不支持的页面</div>;
};

