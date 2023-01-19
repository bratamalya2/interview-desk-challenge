import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/album.css';

function Album({album})
{
    console.log(album);
    return (
        <div className='album'>
            <LazyLoadImage src={album.url} placeholderSrc={album.thumbnailUrl} alt={`Album ${album.id}`} />
        </div>
    );
}

export default Album;