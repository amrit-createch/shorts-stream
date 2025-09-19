import React from 'react'
import { useNavigate } from 'react-router-dom'
function MyvideoCard({video}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate (`/my-videos/${video.id}`)
    }
    return (
         <div
      className="cursor-pointer shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
      onClick={handleClick}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-2">
        <h3 className="font-semibold text-sm">{video.title}</h3>
      </div>
    </div>
    )
}

export default MyvideoCard
