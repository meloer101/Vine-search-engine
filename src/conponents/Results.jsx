import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";

import { useResultContext } from "../contexts/ResultContextProvider";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      // 使用 ?query=...&limit=... 格式，可添加 related_keywords=true 以获取相关关键词（可选）
      getResults(
        `?query=${encodeURIComponent(
          searchTerm
        )}&limit=40&related_keywords=true`
      );
    }
  }, [searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(
            (
              { title, url, description },
              index // 解构 title, url, description
            ) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={url} target="_blank" rel="noreferrer">
                  {" "}
                  {/* 确保链接在新标签页打开 */}
                  <p className="text-sm">
                    {url?.length > 30
                      ? url.substring(0, 30) + "..."
                      : url || "无链接"}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title || "无标题"}
                  </p>
                  <p className="text-md text-gray-600">
                    {description || "无描述"}
                  </p>
                  {/* ReactPlayer 仅适用于视频链接；否则不渲染 */}
                  {url?.includes("youtube.com") || url?.endsWith(".mp4") ? (
                    <ReactPlayer
                      url={url}
                      controls
                      width="355px"
                      height="200px"
                    />
                  ) : null}
                </a>
              </div>
            )
          )}
        </div>
      );

    default:
      return "ERROR!";
  }
};
