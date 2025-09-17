import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchVideos = createAsyncThunk('fetchVideos', async () => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=200&regionCode=IN&key=${API_KEY}`)
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