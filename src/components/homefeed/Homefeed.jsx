import VideoCard from '../VideoCard'
import {useSelector,useDispatch} from 'react-redux'
import { fetchVideos, clearVideos } from '../../store/slices/videoSlice';
import React,{useEffect, useRef} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

function Homefeed({ sidebarOpen, searchQuery, categoryId }) {
    const dispatch = useDispatch()
    const prevQueryRef = useRef();
    const prevCategoryRef = useRef();

    const { items, status, error, nextPageToken } = useSelector((state) => state.videos);

    const fetchMoreData = () => {
      if (nextPageToken && status !== "loading") {
        dispatch(fetchVideos({ 
          Query: searchQuery,
          categoryId: categoryId,
          pageToken: nextPageToken 
        }));
      }
    };

    useEffect(() => {
      // Check if query or category changed
      const queryChanged = prevQueryRef.current !== searchQuery;
      const categoryChanged = prevCategoryRef.current !== categoryId;
      
      if (queryChanged || categoryChanged || status === "idle") {
        // Clear existing videos when query/category changes
        if (queryChanged || categoryChanged) {
          dispatch(clearVideos());
        }
        
        dispatch(fetchVideos({ 
          Query: searchQuery,
          categoryId: categoryId,
          isNewQuery: true 
        }));
      }
      
      // Update refs
      prevQueryRef.current = searchQuery;
      prevCategoryRef.current = categoryId;
      
    }, [dispatch, searchQuery, categoryId, status]);

    if (status === "loading" && items.length === 0) return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
     
    return (
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={!!nextPageToken}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No more videos to load</b>
          </p>
        }
      >
        <div className={`pt-20 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {items.map((video, index) => (
              <VideoCard
                key={`${video.id}-${index}`} // More unique key to avoid React issues
                videoId={video.id.videoId || video.id} // Handle both search and videos API responses
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
                views={video.statistics?.viewCount}
                thumbnail={video.snippet.thumbnails.medium.url}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    );
}

export default Homefeed