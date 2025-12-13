import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 生成页码数组
  const generatePageNumbers = () => {
    const pageNumbers = [];
    
    // 如果总页数很少，显示所有页码
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // 显示当前页前后的几个页码
      const maxVisible = 5;
      const halfVisible = Math.floor(maxVisible / 2);
      
      let startPage = Math.max(1, currentPage - halfVisible);
      let endPage = Math.min(totalPages, startPage + maxVisible - 1);
      
      // 如果结束页太靠近末尾，调整起始页
      if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1);
      }
      
      // 添加起始页码
      pageNumbers.push(1);
      
      // 如果起始页大于2，添加省略号
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // 添加中间页码
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          pageNumbers.push(i);
        }
      }
      
      // 如果结束页小于totalPages - 1，添加省略号
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // 添加末尾页码
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-8">
      {/* 上一页按钮 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md transition-all duration-200 ${currentPage === 1
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          : 'bg-white hover:bg-gray-100 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow'}`}
      >
        上一页
      </button>

      {/* 页码按钮 */}
      {generatePageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {typeof page === 'number' ? (
            <button
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${currentPage === page
                ? 'bg-blue-500 text-white font-medium shadow-md'
                : 'bg-white hover:bg-gray-100 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow'}`}
            >
              {page}
            </button>
          ) : (
            <span className="px-2 py-2 text-gray-500 dark:text-gray-400">{page}</span>
          )}
        </React.Fragment>
      ))}

      {/* 下一页按钮 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md transition-all duration-200 ${currentPage === totalPages
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          : 'bg-white hover:bg-gray-100 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow'}`}
      >
        下一页
      </button>
    </div>
  );
};

export default Pagination;