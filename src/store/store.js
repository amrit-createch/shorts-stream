import {configureStore} from '@reduxjs/toolkit'
import videoSliceReducer from './slices/videoSlice'
import uploadedVideosReducer from './slices/uploadedvideoSlice'
export const store = configureStore({
    reducer:{
        videos: videoSliceReducer,
        uploadedVideos: uploadedVideosReducer,
    }
})