// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "../Layout";
import VideoPlayBack from "./pages/watch/VideoPlayBack";
import SearchResultpage from "./pages/SearchResultpage";
import Myvideopage from "./pages/Myvideopage";
import UploadPage from "./pages/UploadPage";
import MyVideoPlayback from "./pages/MyVideoPlayback";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path: "watch/:videoId", // <-- Add this dynamic route
        element: <VideoPlayBack />,
      },
      {
        path: "/search/:query",
        element:<SearchResultpage/>
      },
      {
        path:"my-videos",
        element:<Myvideopage/>
      },
      {
         path: "upload",
          element: <UploadPage />  
      },
      {
       path: "/my-videos/:videoId",
       element: <MyVideoPlayback />,
}

    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
      </Provider>
        
  </React.StrictMode>
);
