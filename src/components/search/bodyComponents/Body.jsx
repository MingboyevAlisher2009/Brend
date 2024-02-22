import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import ContentTop from './ContentTop';
import BreadCrumb from './BreadCrumb';

function Body() {
    return (
        <div className='bg-gray100'>
            <div className=''>
                <BreadCrumb />
            </div>
            <div className='flex flex-row'>
                <div className='ml-10 w-1/6'>
                    <Sidebar />
                </div>
                <div className='ml-8 flex-column'>
                    <div className='w-content-top'>
                        <ContentTop />
                    </div>
                    <div className='w-content-top'>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
