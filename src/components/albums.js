import React, { useState, useEffect } from 'react';
import Album from './album';
import '../styles/albums.css';

function Albums({ posts }) {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        let i, j = 0, arr = [];
        for (i = 0; i < posts.length; i++) {
            if (posts[i].albumId !== j) {
                j++;
                arr.push({
                    id: posts[i].albumId,
                    url: posts[i].url,
                    thumbnailUrl: posts[i].thumbnailUrl
                });
            }
        }
        setAlbums(arr);
    }, [posts]);

    return (
        <div className='albums'>
            {
                albums.map(album => 
                    <Album key={album.id} album={album} />
                )
            }
        </div>
    );
}

export default Albums;