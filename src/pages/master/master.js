import React, {useEffect, useState} from 'react';

import Sidebar from '../../components/master/sidebar';
import TopHeader from '../../components/master/topheader';
import Dashboard from '../dashboard/dashboard'

export const Master = () => {
const [screenWidth, setScreenWidth] = useState (window.innerWidth);
const [screenValue, setScreenValue] = useState ('');

useEffect (() => {
  const handleResize = () => {
    setScreenWidth (window.innerWidth);
  };

  window.addEventListener ('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener ('resize', handleResize);
  };
}, []);

useEffect (
  () => {
    // Update myValue based on screenWidth
    if (screenWidth < 768) {
      setScreenValue ('sm');
    } else if (screenWidth >= 768 && screenWidth < 1200) {
      setScreenValue ('md');
    } else {
      setScreenValue ('lg');
    }
  },
  [screenWidth]
);

  return (
    <div className="flex">
      <Sidebar screen={screenValue}/>
      <div className="bg-gray-100 w-full"> 
          <TopHeader screen={screenValue}/>      
          <Dashboard/>
      </div>

    </div>
  );
};

export default Master;
