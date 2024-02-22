import blockView from '../../../img/forSearch/blockView.png';
import listView from '../../../img/forSearch/listView.png';

function ContentTop() {
    return (
        <div>
            <div className="relative flex flex-row border border-1 bg-white rounded-md" id="container">
                <div className="p-4 items-center">
                    12,911 items in
                    <span className="mx-2 font-bold">Mobile accessory</span>
                    <div className='flex items-center'>
                        <div className=" absolute right-13 top-2">
                            <input type="checkbox" /> Verified only
                            <select className="p-two pr-8 ml-2 outline rounded-md outline-1 outline-gray-300" name="" id="">
                                <option value="">Featured</option>
                                <option value="">More</option>
                            </select>
                        </div>
                        <div className="flex flex-row p-one absolute right-4 top-cent border border-1 bg-white rounded-md outline-gray-300">
                            <img className="bg-white " src={blockView} alt="" />
                            <img className="bg-gray-300 ml-4 border border-l-1" src={listView} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentTop;
