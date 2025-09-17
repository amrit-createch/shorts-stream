import React from 'react'

function VideoCard({title, channel, views, thumbnail}) {
    return (
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
      src="https://via.placeholder.com/40"
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

    )
}

export default VideoCard