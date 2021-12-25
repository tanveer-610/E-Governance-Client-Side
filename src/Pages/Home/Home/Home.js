import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const userEmail = user.email;
    useEffect(() => {
        fetch(`https://lit-waters-60915.herokuapp.com/users/${userEmail}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userEmail])
    return (
        <div>
            <Banner />
            <AboutUs />
            {
                userInfo?.role !== 'admin' && <Services />
            }

        </div>
    );
};

export default Home;