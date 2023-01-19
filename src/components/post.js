import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/post.css';

function Post({ post }) {
    return (
        <div className='post'>
            <LazyLoadImage src={post.url} placeholderSrc={post.thumbnailUrl} alt={post.title} />
        </div>
    );
}

export default Post;