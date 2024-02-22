import React from 'react';
import ArrowRight from '../../../img/forSearch/arrow-right.png';

function BreadCrumb() {
    return (
        <div className='flex flex-row w-full'>
            <p class="text-gray500 pl-10 py-3">Home </p>
            <img className='size-5 mt-3.5' src={ArrowRight} alt='img' />
            <p class="text-gray500 pl-2 py-3">Clothings </p>
            <img className='size-5 mt-3.5' src={ArrowRight} alt='img' />
            <p class="text-gray500 pl-2 py-3">Men's wear </p>
            <img className='size-5 mt-3.5' src={ArrowRight} alt='img' />
            <p class="text-gray500 pl-2 py-3">Summer clothing </p>
        </div >
    );
}

export default BreadCrumb;
