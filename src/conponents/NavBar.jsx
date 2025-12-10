import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justfy-between justify-center items-center border-b dark:border-gray-700 border-gray-200" >
      <div className="felx justify-between items-center space-x-5 w-screen  " >
        <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-blue-300" >
        <p>
            Vine Search 🔍
        </p>
        </Link>
      </div>
    </div>
  );
};