import '../styles/componentStyle.css';

import React from 'react';

import { AiOutlineCloudUpload } from 'react-icons/ai';

export const AddNewBook: React.FC<{}> = () => {
    return (
        <div className={`pt-[24px] mx-2 md:mx-4 lg:mx-6`}>
        <div className={`blurre`}>
            <div className='flex lg:justify-end md:justify-end justify-center mb-2 gap-x-2'>
                {
                   <button style={{ background: 'purple', borderRadius: '5px' }} className="py-[5px] px-[3px] md:px-[3px] lg:px-[5px]">Upload Book</button>
                }

            </div>

            <div>
                <div>
                    <span className=''>Book Name</span>
                    {
                        <textarea style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md" /> 
                    }
                </div>
            </div>


            <div>
                <div>
                    <span className=''>Cost for Hourly Hire</span>
                    {
                        <textarea style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md " placeholder='Type price' />
                    }

                </div>
            </div>


            <div>
                <div>
                    <span className=''>Cost for Daily Hire</span>
                    {
                        <textarea style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md" placeholder='Type old price' />
                    }

                </div>
            </div>


            <div>
                <div>
                    <span className=''>Cost for Longer-Term Hire</span>
                    {
                        <textarea style={{ background: 'purple' }}  className="w-full pt-2 input focus:outline-none input-md " placeholder='Type offer here' />
                    }

                </div>
            </div>


            <div className='flex items-center'>
                <div>
                    <span>Upload Profile Picture</span>
                    <div className='flex gap-x-4 mt-[10px] w-full'>
                        <div
                            style={{
                                borderRadius: '8px',
                                border: '1px solid rgba(18, 18, 18, 0.16)',
                                background: 'purple',
                                color: 'black',
                            }}
                            className={`customInputImageUpload w-[120px] h-[120px] hover:cursor-pointer`}
                        >
                            <input
                                style={{ position: "absolute", opacity: "0" }}
                                type="file"
                                className="h-[120px]"
                            />
                            <span className='flex justify-center mt-[32px]'><AiOutlineCloudUpload size={35} color={'white'}></AiOutlineCloudUpload></span>
                            <p className="flex justify-center text-white">
                                Click to upload
                            </p>
                        </div>
                    </div>

                    {/* <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 my-[24px]'>
                        {
                            hostedImages?.map((image, index) => <div key={index} style={{ position: relativePosition }}>
                                <span onClick={() => handleRemoveImage(image)} style={{ position: 'absolute', top: '5px', right: '5px' }}><RxCross1 size={25} color={'red'}></RxCross1></span>
                                <img
                                    className="w-[120px] h-[120px] rounded-sm"
                                    src={image}
                                    alt=""
                                />
                            </div>)
                        }
                    </div> */}
                </div>
            </div>
        </div>


        {/* <dialog id="alReadyExistsOnTheCartModal" className="modal" style={{ maxWidth: '480px', transform: 'translateX(-50%)', left: '50%' }}>
            <div style={{
                color: 'white',
                background: 'green',
                border: '1px solid white'
            }} className="modal-box">
                <h3 className="flex justify-center text-white">Book Added successfully</h3>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog> */}
    </div>
    )
}