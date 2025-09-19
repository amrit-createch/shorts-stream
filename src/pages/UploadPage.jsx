import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../store/slices/uploadedvideoSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function UploadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title || !videoFile) return alert("Title and video are required");

    const videoData = {
      id: uuidv4(),
      title,
      url: URL.createObjectURL(videoFile),
      thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : "/default-thumb.jpg",
    };

    dispatch(addVideo(videoData));
    navigate("/my-videos");
  };

  return (
    <div className="pt-20 p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
      <form onSubmit={handleUpload} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadPage;
