import React ,{useState}from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar({ toggleSidebar }) {
    
    
    return (
        <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-3 bg-white shadow-md">
            
            {/* Left Section */}
            
            <div className="flex items-center space-x-2">
                <MenuIcon
                onClick={toggleSidebar}
                className="cursor-pointer text-gray-700 text-3xl"

                />
                <YouTubeIcon className="text-red-600 text-3xl" />
                <span className="text-xl font-bold">YouTube</span>
            </div>

            {/* Center Search */}
            <div className="flex items-center flex-1 max-w-md mx-4">
                <input
                    type="text"
                    placeholder="Search content"
                    className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200">
                    <SearchIcon />
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 border rounded-full hover:bg-gray-100">Upload</button>
                <AccountCircleIcon className="text-3xl text-gray-700" />
            </div>

        </header>
    )
}

export default Navbar