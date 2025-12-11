import React from 'react';
import { Puff } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-80">
      <Puff
        height={80}
        width={80}
        color="#00BFFF"
        ariaLabel="loading-puff"
      />
    </div>
  );
};
