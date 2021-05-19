import React from 'react';
import Posts from './Posts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const posts = [{
        id: 1,
        name: 'React',
        description: 'Best UI library'
        }, 
        {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
 }
];
export default class PostsHolder extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
        return  <Router>
                    <Switch>
                         <Route exact path="/posts">
                            <Posts posts={posts}/>
                        </Route>
                        <Route exact path="/posts/add">
                            <AddPost save={this.addNewPost}/>
                        </Route>
                       </Switch>
                       <Link to="/posts/add">Add</Link>
                    
                </Router>

    }

    addNewPost({name, description}) {
        posts.push({id: posts.length + 1, name, description});
       }

   }

   
   