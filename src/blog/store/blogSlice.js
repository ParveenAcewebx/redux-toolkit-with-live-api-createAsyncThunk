import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    list: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const getAllBlog = createAsyncThunk('blog/fetchBlog', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})


const blogSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
            .addCase(getAllBlog.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getAllBlog.fulfilled, (state, action) => {
                state.status = 'succeeded'                
                // Add any fetched posts to the array
                state.list = action.payload
            })
            .addCase(getAllBlog.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const allBlog = (state) => state.blog.list;
export const getBlogStatus = (state) => state.blog.status;
export const getBlogError = (state) => state.blog.error;

export const { postAdded, reactionAdded } = blogSlice.actions

export default blogSlice.reducer