import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/slices/videoSLice";
import VideoCard from "../components/VideoCard";

function Home() {
  const dispatch = useDispatch();
  const { items = [], status, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideos()); // 👈 now fetchVideos is actually used
  }, [dispatch]);

  return (
    <VideoCard>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {items?.map((video) => (
        <VideoCard
          key={video.id.videoId}
          videoId={video.id.videoId}
          title={video.snippet.title}
        />
      ))}
    </VideoCard>
  );
}

export default Home;
