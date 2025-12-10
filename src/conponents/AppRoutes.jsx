import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        {/* 将所有 "/" 重定向到 "/search" */}
        <Route path="/" element={<Navigate to="/search" replace />} />

        {/* 渲染多个 path 指向同一个组件 */}
        <Route
          path="/search"
          element={<Results />}
        />
        <Route
          path="/images"
          element={<Results />}
        />
        <Route
          path="/news"
          element={<Results />}
        />
        <Route
          path="/videos"
          element={<Results />}
        />
      </Routes>
    </div>
  );
};

