import React from 'react';
import Post from './post';
import '../styles/posts.css';

function Posts({posts})
{
    return (
        <div className='posts'>
            {posts.map(post => 
                <Post key={post.id} post={post}/>
            )}
        </div>
    );
}

export default Posts;