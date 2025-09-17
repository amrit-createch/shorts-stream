import VideoCard from '../VideoCard'
import {useSelector,useDispatch} from 'react-redux'
import { fetchVideos } from '../../store/slices/videoSLice';
import React,{useEffect} from 'react';
function Homefeed({ sidebarOpen }) {
    const dispatch = useDispatch()
    const { items, status, error } = useSelector((state) => state.videos);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVideos());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
    return (
      <div className={`pt-20 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {items.map((video) => (
            <VideoCard
              key={video.id}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              views={video.statistics?.viewCount}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          ))}
        </div>
      </div>
  );
}

export default Homefeed