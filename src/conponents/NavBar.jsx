import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justfy-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="felx justify-between items-center space-x-5 w-screen  ">
        {/* Logo Section */}
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900 ">
            Vine Search 🔍
          </p>
        </Link>

        {/*dark mode toggle button */}

        
      </div>
    </div>
  );
};
