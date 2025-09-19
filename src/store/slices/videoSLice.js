import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchVideos = createAsyncThunk('fetchVideos', async ({categoryId, query}) => {
   let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
    if (categoryId) url +=`&videoCategoryId=${categoryId}`;
    if(query)  url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
     const res = await fetch (url)
    const data = await res.json()
    return data.items
})

const videoSlice = createSlice({
    name: "videos", 
    initialState: {
        items: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export default videoSlice.reducer