import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home()
{
    const history = useNavigate();

    useEffect(() => {
        history('/Bret');
    }, [history]);

    return (
        <React.Fragment>
            Redirecting you to user Bret's page
        </React.Fragment>
    );
}

export default Home;