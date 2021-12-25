import React from 'react';
import pageNotFound from '../../../Assets/pagenotfound.png';

const PageNotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src={pageNotFound} className='w-50' alt="" />
        </div>
    );
};

export default PageNotFound;