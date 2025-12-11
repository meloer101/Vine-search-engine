import React from 'react';
import  { useLoaction } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {useResultContext} from '../contexts/ResultContextProvider'; 

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
const location = useLoaction();

if (isLoading) return <Loading/>;

  return (
    <div>
        <h1>Results</h1>
    </div>
  );
};