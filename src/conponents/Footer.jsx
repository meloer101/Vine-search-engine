import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-auto py-8 px-4 border-t dark:border-gray-800 border-gray-200 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Vine Search, Inc. 保留所有权利
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors duration-300"
            >
              关于我们
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors duration-300"
            >
              使用条款
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors duration-300"
            >
              隐私政策
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors duration-300"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </footer> )}