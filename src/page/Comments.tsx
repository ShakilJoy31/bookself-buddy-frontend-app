import '../styles/dashboard.css';
import '../styles/individual.css';

import React from 'react';

import {
  BiSend,
  BiSolidCommentAdd,
} from 'react-icons/bi';

export const Comments: React.FC<{}> = () => {
    return (
        <div>
            <div className={`commentsContainer`}>
                <div style={{ borderBottom: `1px solid crimson` }} className={`comment`}>

                    <div>
                        <div className='flex justify-between items-center'>
                            <p className={`user`}>Shakil</p>
                            <p className={`date`}>3-12-2022, 12: 20 PM</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center'>
                            <p className={`commentText`}>This is user comment</p>

                            <div className='flex items-center gap-x-3'>
                                <span className={`plusCommnet`}><BiSolidCommentAdd size={25}></BiSolidCommentAdd></span>

                            </div>
                        </div>

                        <div className={`flex justify-between items-center pl-2 md:pl-3 lg:pl-4 w-full my-3`}>
                            <div style={{
                                borderRadius: '6px',
                                background: 'white',
                            }} className='w-full flex items-center'>
                                <textarea
                                    style={{
                                        borderRadius: '6px',
                                        background: 'white',
                                    }}

                                    placeholder={`Hi Shakil,  Please type your review here`}
                                    className={`w-full h-[35px] focus:outline-none border-0 pl-1 text-black`}

                                    name=""
                                    id=""
                                />
                                {/* {
                                            (authenticatedUser?.name || reviewerComment) ? <span className="loading loading-dots loading-sm text-black"></span> : ''
                                        } */}
                            </div>

                            <span className={`plusCommnet`}><BiSend size={25}></BiSend></span>

                        </div>
                        <span className={`date hover:cursor-pointer`}>View 5 replies</span>

                        
                        {/* The reviews for the individual comment */}
                        <div className='pl-3 md:pl-4 lg:pl-5'>
                            <div style={{ borderBottom: `1px solid #888` }} className='mb-1'>
                                <div className='flex justify-between items-center'>
                                    <p className={`user`}>Shihab</p>

                                    <p className={`date`}>3-12-2022, 12: 20 PM</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className={`commentText`}>This is my review</p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}