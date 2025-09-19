import { createSlice } from "@reduxjs/toolkit";

const uploadedVideosSlice = createSlice ({
    name:"uploadedVideos",
    initialState:{
        items:[
            {
                id:"1",
                title:"demo",
                url: "https://www.w3schools.com/html/mov_bbb.mp4", // sample video
        thumbnail: "https://via.placeholder.com/300x200",
            }
        ]
    },
    reducers:{
        addVideo:(state,action) => {
            state.items.push(action.payload)
        }
    }
})
export const{addVideo} = uploadedVideosSlice.actions
export default uploadedVideosSlice.reducer