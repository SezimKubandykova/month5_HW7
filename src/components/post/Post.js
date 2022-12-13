import React from 'react';
import {useDispatch} from "react-redux";
import {getOnePost} from "../../store/postsSlice";

function Post({post}) {
  const dispatch = useDispatch()
    return (
        <div>
            <h3>title: {post.title}</h3>
            <button onClick={() => {dispatch(getOnePost(post.id))}}>get info</button>
            <h1>-------------------------</h1>
        </div>
    );
}

export default Post;