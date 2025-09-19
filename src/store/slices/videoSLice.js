import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ categoryId, Query, pageToken, isNewQuery = false } = {}) => {
    let url = "";

    if (Query) {
      url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(Query)}&type=video&regionCode=IN&key=${API_KEY}`;
    } else {
      url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;
      if (categoryId) url += `&videoCategoryId=${categoryId}`;
    }

    if (pageToken) url += `&pageToken=${pageToken}`;

    const res = await fetch(url);
    const data = await res.json();

    return {
      items: data.items,
      nextPageToken: data.nextPageToken || null,
      isNewQuery, // Pass this to know if we should reset the state
      currentQuery: Query || null,
      currentCategoryId: categoryId || null,
    };
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    nextPageToken: null,
    currentQuery: null,
    currentCategoryId: null,
  },
  reducers: {
    // Add a reducer to clear videos when needed
    clearVideos: (state) => {
      state.items = [];
      state.nextPageToken = null;
      state.status = "idle";
      state.currentQuery = null;
      state.currentCategoryId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        
        // If it's a new query or the query/category changed, replace items instead of concatenating
        if (action.payload.isNewQuery || 
            state.currentQuery !== action.payload.currentQuery ||
            state.currentCategoryId !== action.payload.currentCategoryId) {
          state.items = action.payload.items;
        } else {
          // Only concatenate if we're loading more of the same query
          state.items = state.items.concat(action.payload.items);
        }
        
        state.nextPageToken = action.payload.nextPageToken;
        state.currentQuery = action.payload.currentQuery;
        state.currentCategoryId = action.payload.currentCategoryId;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearVideos } = videoSlice.actions;
export default videoSlice.reducer;