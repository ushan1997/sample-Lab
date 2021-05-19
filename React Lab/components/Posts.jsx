import React from 'react'; 
import PostListItem from './PostListItem'; 
import Post from './Post';

export default class Posts extends React.Component { 
    constructor(props) { 
        super(props); //super() is used to call the parent constructor. 
        //super(props) would pass props to the parent constructor 
        this.state = {
            post: null
        };
    }

    selectPost(post) {
        this.setState({post})
    }

    render() { 
        const {posts} = this.props; 
        return <div> 
                    <table> 
                        <thead> 
                            <tr> 
                                <th>ID</th> 
                                <th>Name</th> 
                                <th>Description</th> 
                                <th>Select</th>
                            </tr> 
                        </thead> 
                            <tbody> 
                                {posts.map(post => { 
                                    return <PostListItem key={post.id.toString()} post={post}   selectPost={post=>this.selectPost(post)}/>})}
                            </tbody> 
                    </table> 
                    <div>
                         {this.state.post ?/**cheack null or not,if it is not null you are 
                         selected the post and passing the state as a props to post component**/ <Post post={this.state.post}  />:''}
                    </div>
                </div>; 
    } 
}