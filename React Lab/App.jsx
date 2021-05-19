import React from 'react';
import Posts from './components/Posts';

//or import React,{Component} from 'react';

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    },{
        id:3,
        name : 'koa',
        description: 'Server side framework'
    }
   ];


    export default class App extends React.Component /** React class level component**/{
        constructor(props) {
        super(props);
    }

    render() { 
        return <div>
            <Posts posts={posts} />
        </div>
    }
}
//13
    // render() {
    //    // return <h1>Hello to React. This is second task.</h1>;
    //    return <div>
    //             <table>
    //                 <thead>
    //                     <tr>
    //                      <th>ID</th>
    //                      <th>Name</th>
    //                      <th>Description</th>
    //                     </tr>
    //                  </thead>
    //              <tbody>
    //                  {posts.map(post => {
    //                       return <tr key={post.id.toString()}>{/* this key is unique in each element in the array */}
    //                     <td>{post.id}</td>
    //                     <td>{post.name}</td>
    //                     <td>{post.description}</td>
    //                     </tr>
    //                      })}
    //                 </tbody>
    //             </table>
    //         </div>
    // }

