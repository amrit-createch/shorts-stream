import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/Sidebar'
import VideoCard from './components/VideoCard'
import Homefeed from './components/homefeed/Homefeed'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Homefeed/>
         {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-5 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
export default App;

