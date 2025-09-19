import React ,{useState}from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../store/slices/videoSlice';
import { useNavigate } from 'react-router-dom';
function Navbar({ toggleSidebar }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [Query,setQuery] = useState('')
    const handleSearch = () => {
    if (Query.trim()) {
        dispatch(fetchVideos({Query}))
        navigate(`/search/${encodeURIComponent(Query)}`);
         setQuery("");
       
    }
};
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

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
                    value={Query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    onKeyDown={handleKeyDown}
                    placeholder="Search content"
                    className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button onClick={handleSearch} 
                className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200">
                    <SearchIcon />
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                <button
        onClick={() => navigate("/upload")}
        className="px-4 py-2 border rounded-full hover:bg-gray-100"
      >
        Upload
      </button>
                <AccountCircleIcon className="text-3xl text-gray-700" />
            </div>

        </header>
    )
}

export default Navbar