import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../store/slices/videoSlice';

function Sidebar({ isOpen, toggleSidebar }) {
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryId) => {
    dispatch(fetchVideos({ categoryId }));
    toggleSidebar(); // optional: close sidebar after click
  };

  return (
    <div
      className={`fixed top-16 left-0 h-full bg-white shadow-md p-4 transition-transform duration-300 z-10 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64`}
    >
      <ul className="space-y-3">
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleCategoryClick(0)} // All
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleCategoryClick(24)} // Entertainment
        >
          Trending
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleCategoryClick(17)} // Sports
        >
          Sports
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleCategoryClick(25)} // News
        >
          News
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleCategoryClick(28)} // Tech
        >
          Technology
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
