import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/postsSlice";
import Post from "../../components/post/Post";

function PostsPage(props) {
    const dispatch = useDispatch();
    const {posts, preloader, error, post} = useSelector(state => state.postsReducer)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            <h1>posts</h1>
            <h2>--------------------------------</h2>
            <h3>title: {post?.title}</h3>
            <p>body: {post?.body}</p>
            <h2>--------------------------------</h2>
            {
                preloader
                    ?
                    <div>loading...</div>
                    :
                    error
                        ?
                        <div>{error}</div>
                        :
                        posts.slice(0, 10).map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    );
}

export default PostsPage;