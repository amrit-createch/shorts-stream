import {configureStore} from '@reduxjs/toolkit'
import videoSliceReducer from './slices/videoSLice'
export const store = configureStore({
    reducer:{
        videos: videoSliceReducer
    }
})