import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blog/store/blogSlice";


export const store = configureStore({
    reducer: {
        blog: blogSlice
    }
})