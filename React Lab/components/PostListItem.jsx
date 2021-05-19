//15 defining the table rows
import React from 'react';

export default function PostListItem(props) {//functional component

 const {post,selectPost} = props;
    return <tr>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td><a onClick={() => selectPost(post)}>Select</a></td>
        
    </tr>
}