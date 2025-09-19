import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function MyVideoPlayback() {
  const { videoId } = useParams();
  const video = useSelector((state) =>
    state.uploadedVideos.items.find((v) => v.id === videoId)
  );

  if (!video) return <p className="p-4 text-center">Video not found</p>;

  return (
    <div className="pt-20 p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
      <video
        src={video.url}
        controls
        className="w-full max-w-3xl rounded shadow"
      />
    </div>
  );
}

export default MyVideoPlayback;
