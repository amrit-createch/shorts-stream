import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, clearVideos } from "../store/slices/videoSlice";
import VideoCard from "../components/VideoCard";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchResults() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const prevQueryRef = useRef();

  const { items, status, error, nextPageToken } = useSelector((state) => state.videos);

  const fetchMoreData = () => {
    if (nextPageToken && status !== "loading") {
      dispatch(fetchVideos({ 
        Query: query,
        pageToken: nextPageToken 
      }));
    }
  };

  useEffect(() => {
    // Check if query changed
    const queryChanged = prevQueryRef.current !== query;
    
    if (queryChanged || status === "idle") {
      // Clear existing videos when query changes
      if (queryChanged) {
        dispatch(clearVideos());
      }
      
      dispatch(fetchVideos({ 
        Query: query,
        isNewQuery: true 
      }));
    }
    
    // Update ref
    prevQueryRef.current = query;
    
  }, [dispatch, query, status]);

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
      <div className="pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {items.map((video, index) => {
            const videoId = video.id.videoId || video.id;
            return (
              <Link key={`${videoId}-${index}`} to={`/video/${videoId}`}>
                <VideoCard
                  videoId={videoId}
                  title={video.snippet.title}
                  channel={video.snippet.channelTitle}
                  views={video.statistics?.viewCount}
                  thumbnail={video.snippet.thumbnails.medium.url}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default SearchResults;