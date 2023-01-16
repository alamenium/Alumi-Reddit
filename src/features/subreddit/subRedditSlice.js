import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Axios from "axios";

const initialState={
    subRedditInfos: {},
    isLoading: false,
    isError: false
}

export const AsyncLoadSubredditInfo = createAsyncThunk(
    "subreddit/loadSubs",
    async (subName)=>{

        console.log(subName)
        const url = `https://www.reddit.com/r/${subName}/about/.json`
        const response = await Axios.get(url);

        const index = response.data.data.community_icon.indexOf("?");
        const imageURL =  response.data.data.community_icon.slice(0,index)
        console.log(imageURL)
        return {
            name: subName,
            imageURL: imageURL
        };

    }
)

export const subRedditSlice = createSlice({
    name: "subreddit",
    initialState: initialState,
    reducers:{},
    extraReducers:{
        [AsyncLoadSubredditInfo.pending]: (state) =>{
            state.isLoading = true;
            state.isError = false;
        },
        [AsyncLoadSubredditInfo.fulfilled]: (state,action) =>{
            state.isLoading = false;
            state.isError = false;

            const newSubInfo = action.payload;
            state.subRedditInfos[newSubInfo.name] = newSubInfo.imageURL;
        },
        [AsyncLoadSubredditInfo.pending]: (state) =>{
            state.isLoading = false;
            state.isError = true;
        }

    }
})
export const selectSubInfosLoading = state => state.subreddit.isLoading;
export const selectSubRedditInfos = state => state.subreddit.subRedditInfos;
export default subRedditSlice.reducer;