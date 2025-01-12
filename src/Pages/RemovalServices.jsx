import img from '../../src/assets/help.webp'
import img2 from '../../src/assets/watch.webp'
import img3 from '../../src/assets/protect.webp'
import img4 from '../../src/assets/control.webp'
import img5 from '../../src/assets/managment.webp'
import img6 from '../../src/assets/doc.webp'
import DynamicTitle from '../CommenPage/DynamicTitle'

const RemovalServices = () => {
    return (
        <div className="w-11/12 mx-auto">
            <DynamicTitle title={"How Can We Help?"} subtitle={" We Provide a Wide Variety of Pest Removal Services"}></DynamicTitle>
            <div className='lg:flex  gap-6 my-10 justify-center items-center'>
                <div className='bg-[#F1F5F6] p-3 flex-1'>
                    <h2 className="text-2xl uppercase p-10 text-center font-bold">For your home</h2>
                    <div className='bg-white p-10 space-y-8'>
                        <div className='flex gap-6 items-center' >
                            <div>
                                <img src={img} alt="" className='w-14 h-14' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="font-bold">Emergency Help</h1>
                                <p>Our management staff expertly coordinates</p>
                                <p> pest control orders to avoid any delays</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src={img3} alt="" className='w-14 h-14' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="font-bold">Protect</h1>
                                <p>There is literally no chance for pests to</p>
                                <p>survive at your restaurants' kitchen!</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center '>
                            <div>
                                <img src={img2} alt="" className='w-14 h-14' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="font-bold">Keep Watch</h1>
                                <p>We give you instructions for safety measures </p>
                                <p>that you must follow at your office</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F1F5F6] p-3 flex-1 '>
                    <h2 className="text-2xl uppercase p-10 text-center font-bold">For your business</h2>
                    <div className='bg-white p-10 space-y-8'>
                        <div className='flex gap-6 items-center' >
                            <div>
                                <img src={img5} alt="" className='w-14 h-14' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="font-bold">Integrated Pest Management</h1>
                                <p>Our management staff expertly coordinates</p>
                                <p> pest control orders to avoid any delays</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src={img4} alt="" className='w-14 h-14' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="font-bold">Restaurant Pest Control</h1>
                                <p>There is literally no chance for pests to</p>
                                <p>survive at your restaurants' kitchen!</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src={img6} alt="" className='w-14 h-14' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="font-bold">Service Documentation</h1>
                                <p>We give you instructions for safety measures </p>
                                <p>that you must follow at your office</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemovalServices;