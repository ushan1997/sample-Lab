import React, { useState } from 'react';
import Post from './Post';
import PostListItem from './PostListItem';

export default function Post(props) {

    const [post,setPost] = useState(null, props);

    const {posts} = props;
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => {
                    return(
                        <PostListItem key={post.id.toString()} 
                        post={post}
                        selectPost={post => setPost(post)}/>
                    )
                })}
                </tbody>
            </table>
            <div>
                {post ? <Post post={post}/> : ''}
            </div>
        </div>
    )
}

