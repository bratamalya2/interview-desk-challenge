import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Posts from '../components/posts';
import Albums from '../components/albums';
import '../styles/user.css';

function User() {
    const { username } = useParams();
    const profilePicture = 'https://images.pexels.com/photos/6373499/pexels-photo-6373499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({});
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState({});
    const [posts, setPosts] = useState([]);
    const [isPostsSelected, setIsPostsSelected] = useState(true);

    const fetchData = async () => {
        let apiData = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let userData = await apiData.json();
        if (userData)
        {
            if (userData.username === username)
            {
                setName(userData.name);
                setEmail(userData.email);
                setAddress(userData.address);
                setPhone(userData.phone);
                setWebsite(userData.website);
                setCompany(userData.company);
            }
        }
        apiData = await fetch('https://jsonplaceholder.typicode.com/photos');
        userData = await apiData.json();
        if(userData)
            setPosts(userData);
    };

    const fetchDataCallback = useCallback(fetchData, [username]);
    const selectedTabStyle = {
        borderTop: '1px solid',
        position: 'relative',
        top: '-15px',
        paddingTop: '15px'
    };

    const unselectedTabStyle = {};

    useEffect(() => {
        fetchDataCallback();
    }, [username, fetchDataCallback]);

    if (name)
        return (
            <React.Fragment>
                <div className='User'>
                    <span className='profile-picture'>
                        <img src={profilePicture} alt='Profile pic' />
                    </span>
                    <span className='user-desc'>
                        <span className='user-desc-line-1'>
                            <span className='username'>
                                {username}
                                <span className='material-symbols-rounded' style={{ color: 'blue' }}>
                                    verified
                                </span>
                            </span>
                            <Button variant='contained' color='secondary' style={{ textTransform: 'none' }}>Follow</Button>
                            <Button variant='contained' color='secondary' style={{ textTransform: 'none' }}>Message</Button>
                            <Button variant='text' color='tertiary'>
                                <span className='material-symbols-outlined'>
                                    more_horiz
                                </span>
                            </Button>
                        </span>
                        <span className='user-desc-line-2'>
                            <span style={{ fontWeight: 500 }}>{posts.length} posts</span>
                        </span>
                        <span>
                            <span style={{ fontWeight: 500 }}>{name}</span>
                        </span>
                        <span>
                            <span>{email}</span>
                        </span>
                        <span>
                            <span>{phone}</span>
                        </span>
                        <span>
                            <span>
                                <a target='_blank' rel='noreferrer' href={`http://${website}`} style={{ textDecoration: 'none' }}>
                                    {website}
                                </a>
                            </span>
                        </span>
                        <span>
                            <span>{address.suite}, {address.street}</span>
                        </span>
                        <span>
                            <span>{address.city}</span>
                        </span>
                        <span>
                            <span>
                                {address.zipcode}
                            </span>
                        </span>
                        <span>
                            <span>
                                <span className='material-symbols-outlined' style={{
                                    position: 'relative',
                                    top: '5px',
                                    fontSize: '20px'
                                }}>
                                    pin_drop
                                </span>
                                {address.geo.lat}&deg;N&nbsp;
                                {address.geo.lng}&deg;E
                            </span>
                        </span>
                        <span>
                            <span>{company.name}</span>
                        </span>
                        <span>
                            <span>{company.catchPhrase}</span>
                        </span>
                    </span>
                </div>
                <div className='posts-header-row'>
                    <div style={isPostsSelected?selectedTabStyle:unselectedTabStyle} onClick={() => setIsPostsSelected(curr => !curr)}>
                        <span className='material-symbols-outlined'>
                            grid_4x4
                        </span>
                        <span className='posts-header'>Posts</span>
                    </div>
                    <div style={isPostsSelected?unselectedTabStyle:selectedTabStyle} onClick={() => setIsPostsSelected(curr => !curr)}>
                        <span className='material-symbols-outlined'>
                            photo_library
                        </span>
                        <span className='posts-header'>Albums</span>
                    </div>
                </div>
                {
                    isPostsSelected?(
                        <Posts posts={posts} />
                    ):(
                        <Albums posts={posts} />
                    )
                }
            </React.Fragment>
        );
    else
        return null;
}

export default User;