import ArrowRight from '../../../img/forSearch/arrow-right.png';
import fiveRate from '../../../img/forSearch/rate5.png';
import fourRate from '../../../img/forSearch/rate4.png';
import threeRate from '../../../img/forSearch/rate3.png';
import twoRate from '../../../img/forSearch/rate2.png';

function Sidebar() {
    return (
        <div className='relative'>
            <div className='border-t-2'>
                <div id='firstSection'>
                    <div className='flex flex-row mt-2 font-bold'>
                        Category
                        <img className='size-5 -rotate-90 absolute right-0' src={ArrowRight} alt='img' />
                    </div>
                    <div className='text-gray600 mt-3'>Mobile accessory</div>
                    <div className='text-gray600 mt-2'>Electronics</div>
                    <div className='text-gray600 mt-2'>Smartphones</div>
                    <div className='text-gray600 mt-2'>Modern tech</div>
                    <div className='text-primaryS mt-2 mb-5'>See all</div>
                </div>
                <div id='secondSection' className='border-t-2'>
                    <div className='flex flex-row mt-2 font-bold'>
                        Brand
                        <img className='size-5 -rotate-90 absolute right-0' src={ArrowRight} alt='img' />
                    </div>
                    <div className='text-gray600 mt-3'><input type="checkbox" />  Samsung</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Apple</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Huawei</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Poco</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Lenovo</div>
                    <div className='text-primaryS mt-2 mb-5'>See all</div>
                </div>
                <div id='thirdSection' className='border-t-2'>
                    <div className='flex flex-row mt-2 font-bold'>
                        Features
                        <img className='size-5 -rotate-90 absolute right-0' src={ArrowRight} alt='img' />
                    </div>
                    <div className='text-gray600 mt-3'><input type="checkbox" />  Metallic</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Plastic cover</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  8GB Ram</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Super power</div>
                    <div className='text-gray600 mt-2'><input type="checkbox" />  Large memory</div>
                    <div className='text-primaryS mt-2 mb-5'>See all</div>
                </div>
                <div id='fourthSection' className='border-t-2'>
                    <div className='flex flex-row mt-2 font-bold'>
                        Price range
                        <img className='size-5 -rotate-90 absolute right-0' src={ArrowRight} alt='img' />
                    </div>
                </div>
                <input type="range" />
                <div className='flex flex-row space-x-2'>
                    <input className='w-1/2 h-8 bg-color-white outline outline-gray500 outline-1 rounded-md text-gray500' placeholder='0' type="text" />
                    <input className='w-1/2 h-8 bg-color-white outline outline-gray500 outline-1 rounded-md text-gray500' placeholder='999999' type="text" />
                </div>
                <div className='mt-2'><button className='w-full h-8 outline outline-1 outline-gray500 rounded-md text-primaryS mb-5'>Apply</button></div>
                <div id='fifthSection' className='border-t-2'>
                    <div className='flex flex-row mt-2 font-bold'>
                        Condition
                        <img className='size-5 -rotate-90 absolute right-0' src={ArrowRight} alt='img' />
                    </div>
                    <div className='text-gray600 mt-3'><input type="radio" />  Any</div>
                    <div className='text-gray600 mt-2'><input type="radio" />  Refurbished</div>
                    <div className='text-gray600 mt-2'><input type="radio" />  Brand new</div>
                    <div className='text-gray600 mt-2 mb-5'><input type="radio" />  Old items</div>
                </div>
                <div id='sixthSection' className='border-t-2'>
                    <div className='flex flex-row mt-2 font-bold'>
                        Ratings
                        <img className='size-5 -rotate-90 absolute right-0' src={ArrowRight} alt='img' />
                    </div>
                    <div className='flex flex-row text-gray600 mt-3'><input type="checkbox" />
                        <img className='ml-2 mb-2' src={fiveRate} alt="" />
                    </div>
                    <div className='flex flex-row text-gray600 mt-2'><input type="checkbox" />
                        <img className='ml-2 mb-2' src={fourRate} alt="" />
                    </div>
                    <div className='flex flex-row text-gray600 mt-2'><input type="checkbox" />
                        <img className='ml-2 mb-2' src={threeRate} alt="" />
                    </div>
                    <div className='flex flex-row text-gray600 mt-2'><input type="checkbox" />
                        <img className='ml-2 mb-2' src={twoRate} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
