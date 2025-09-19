import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { fetchVideos } from '../../store/slices/videoSLice';
function VideoPlayBack() {
    const dispatch = useDispatch()
   useEffect(() => {
       if (status === "idle") {
         dispatch(fetchVideos());
       }
     }, [dispatch, status]);
   
     if (status === "loading") return <p>Loading...</p>;
     if (status === "failed") return <p>Error: {error}</p>;
    
    const {videoId} = useParams()
    
    return (
         <div className="pt-20 px-4 md:px-8 lg:flex lg:space-x-6">
      {/* Main Video Player and Details */}
      <div className="lg:w-2/3">
        {/* YouTube Player Iframe */}
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Title, Channel Info, etc. will go here */}
        <div className="mt-4">
          <h1 className="text-xl font-bold">{/*video.snippet.title*/}</h1>
          <p className="text-gray-600">{/*.snippet.channelTitle | video.statistics?.viewCount */} </p>
        </div>

        {/* Comments Section will go here */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Comments</h2>
          {/* ... */}
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="lg:w-1/3 mt-6 lg:mt-0">
        <h2 className="text-lg font-semibold mb-3">Up Next</h2>
        {/* You will map over related videos and show them here */}
      </div>
    </div>
    )
}

export default VideoPlayBack
