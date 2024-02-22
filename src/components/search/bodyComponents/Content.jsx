import first from '../../../img/forSearch/1.png';
import second from '../../../img/forSearch/2.png'
import third from '../../../img/forSearch/3.png'
import fourth from '../../../img/forSearch/4.png'
import fifth from '../../../img/forSearch/5.png'
import sixth from '../../../img/forSearch/6.png'

function Content() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row bg-white my-2 rounded-md border border-2 border-gray300 h-50' id='first'>
                <img className='size-50 p-5' src={first} alt="" />
                <div className='p-5'>
                    Canon Cmera EOS 2000, Black 10x zoom
                    998$
                </div>
            </div>
            <div className='flex flex-row bg-white my-2 rounded-md border border-2 border-gray300 h-50' id='second'>
                <img className='size-50 p-5' src={second} alt="" />
                Canon Cmera EOS 2000, Black 10x zoom
                <p>998$</p>
            </div>
            <div className='flex flex-row bg-white my-2 rounded-md border border-2 border-gray300 h-50' id='third'>
                <img className='size-50 p-5' src={third} alt="" />
                Canon Cmera EOS 2000, Black 10x zoom
                <p>998$</p>
            </div>
            <div className='flex flex-row bg-white my-2 rounded-md border border-2 border-gray300 h-50' id='fourth'>
                <img className='size-50 p-5' src={fourth} alt="" />
                Canon Cmera EOS 2000, Black 10x zoom
                <p>998$</p>
            </div>
            <div className='flex flex-row bg-white my-2 rounded-md border border-2 border-gray300 h-50' id='fifth'>
                <img className='size-50 p-5' src={fifth} alt="" />
                Canon Cmera EOS 2000, Black 10x zoom
                <p>998$</p>
            </div>
            <div className='flex flex-row bg-white my-2 rounded-md border border-2 border-gray300 h-50' id='sixth'>
                <img className='size-50 p-5' src={sixth} alt="" />
                Canon Cmera EOS 2000, Black 10x zoom
                <p>998$</p>
            </div>
        </div>
    );
}

export default Content;
