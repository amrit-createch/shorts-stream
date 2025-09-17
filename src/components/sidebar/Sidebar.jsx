import React from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
    if(isOpen){
        !isOpen
    } 
  return (
    <div className={`fixed top-16 left-0 h-full bg-white shadow-md p-4 transition-transform duration-300 z-10 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64`}>
      <ul className="space-y-3">
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => console.log('Home clicked')}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => console.log('Trending clicked')}
        >
          Trending
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => console.log('Sports clicked')}
        >
          Sports
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => console.log('News clicked')}
        >
          News
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => console.log('Technology clicked')}
        >
          Technology
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;