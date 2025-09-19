import React from 'react'
import {Link} from 'react-router-dom'
function VideoCard({title, channel,videoId, views, thumbnail}) {
     const formatViews = (views) => {
        if (!views) return '0';
        if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
        if (views >= 1000) return `${(views / 1000).toFixed(0)}K`;
        return views;
    };
    return (
       <Link to={`/watch/${videoId}`}>
        <div className="w-full max-w-sm">
  {/* Thumbnail */}
  <img
    src={thumbnail}
    alt={title}
    className="w-full aspect-video object-cover rounded-lg"
  />

  {/* Info Section */}
  <div className="flex mt-2">
    {/* Channel Logo */}
    <img
      src={thumbnail}
      alt="Channel Logo"
      className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
    />

    {/* Text Info */}
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-sm line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{channel}</p>
      <p className="text-gray-500 text-xs">{views} • 3 days ago</p>
    </div>
  </div>
</div>
</Link>
    )
}

export default VideoCard