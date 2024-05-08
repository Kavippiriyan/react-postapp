import React from 'react';
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import './postlist.css';

const PostList: React.FC = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ));

    return (
        <div className="post-container">
            <h2>PostList</h2>
            {renderedPosts}
        </div>
    );
};

export default PostList;
