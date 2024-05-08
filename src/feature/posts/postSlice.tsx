import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    id: string;
    title: string;
    content: string;
}

const initialState: Post[] = [
    {
        id: '1',
        title: "The Life Lessons",
        content: "It's All about from my Personal life"
    },
    {
        id: '2',
        title: "The Inner Beauty",
        content: "about how the inner beauty is glittering "
    },
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        AddPost: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userid: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userid
                    }
                };
            }
        }
    }
});

export const selectAllPosts = (state: { posts: Post[] }) => state.posts;

export const { AddPost } = postSlice.actions

export default postSlice.reducer;