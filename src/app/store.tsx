import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../feature/posts/postSlice'
import userReducer from '../feature/posts/postSlice'


export const store = configureStore(
    {
        reducer: {
            posts: postReducer,
            users: userReducer
        }
    }
)
