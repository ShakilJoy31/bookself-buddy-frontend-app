import '../styles/dashboard.css';

import React from 'react';

import { useGetBooksQuery } from '../redux/api/apiSlice';

export const Books: React.FC<{}> = () => {
    const {data, isLoading, error} = useGetBooksQuery(undefined);
    console.log(data?.data, isLoading);
    console.log(error);
    return (
        <div>
            <div>
            <div className='flex justify-between items-center'>
                <div className='block mx-auto'>
                    <h1>
                        <svg className="gradient-text text-2xl font-bold" width="100%" height="38" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: 'crimson' }} />
                                    <stop offset="50%" style={{ stopColor: '#00ff00' }} />
                                    <stop offset="100%" style={{ stopColor: 'rgb(28,97,231)' }} />
                                </linearGradient>
                            </defs>
                            <text style={{ fontSize: '32px' }} className='' x="20" y="30" fill="url(#gradient)" textAnchor="start">Latest Book</text>
                        </svg>
                    </h1>
                </div>


                {/* <div style={{ position: 'relative' }} className='flex items-center w-32 lg:w-50 md:w-50'>
                    <h1 className={`hover:cursor-pointer ${DashboardCSS.showMoreButton}`} onClick={() => { handleClickedCategoryForMore(byCategory?.category) }}>
                        Show more
                    </h1>
                    <span className={`${DashboardCSS.forMoreProduct}`}>
                        <FaAngleDoubleRight size={20} color={'black'} />
                    </span>
                </div> */}
            </div>
                <div>
                    {/* For mobile */}
                    <div className='grid lg:hidden md:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[24px] my-6 w-full' style={{ overflow: 'hidden' }}>
                        {
                            <div style={{
                                borderRadius: '8px',
                                border: '2px solid crimson'
                            }} className={`w-full hover:cursor-pointer imageContainer productBackground`} data-aos="zoom-in-up">
                                <div className={`imageContainer`}>
                                    <figure><img className='lg:h-[220px] md:h-[200px] h-[180px]' src='https://bengaliebook.com/wp-content/uploads/2021/06/%E0%A6%AC%E0%A6%89-%E0%A6%A0%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%9F-768x1086.jpg' alt="Product Image" style={{ width: '100%', objectFit: 'cover', borderRadius: '0 8px 0 0' }} /></figure>
                                </div>

                                <div style={{ position: 'absolute', bottom: '5px', zIndex: '3' }} className="px-1 w-full">
                                    <h2 className={`productTitle flex justify-center mb-[2px]`}>Bou thakuranir hat</h2>


                                    <div className="flex justify-center w-full">
                                        <p style={{fontSize: '10px'}} className='text-slate-400'>Robindranath Tagor</p>
                                    </div>
                                </div>


                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '-2px',
                                        left: '0',
                                        width: '100%',
                                        height: '50%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                                        zIndex: '2',
                                    }}
                                ></div>
                            </div>
                        }
                    </div>

                    {/* For Large device */}
                    <div className='hidden lg:grid md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[24px] my-6 w-full' style={{ overflow: 'hidden' }}>
                        {
                            <div style={{
                                borderRadius: '8px',
                                border: '2px solid crimson'
                            }} className={`w-full hover:cursor-pointer imageContainer productBackground`} data-aos="zoom-in-up">
                                <div className={`imageContainer`}>
                                    <figure><img className='lg:h-[220px] md:h-[200px] h-[180px]' src='https://bengaliebook.com/wp-content/uploads/2021/06/%E0%A6%AC%E0%A6%89-%E0%A6%A0%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%9F-768x1086.jpg' alt="Product Image" style={{ width: '100%', objectFit: 'cover', borderRadius: '0 8px 0 0' }} /></figure>
                                </div>

                                <div style={{ position: 'absolute', bottom: '5px', zIndex: '3' }} className="px-1 w-full">
                                    <h2 className={`productTitle flex justify-center mb-[2px]`}>Bou thakuranir hat</h2>

                                    <div className="flex justify-center w-full">
                                        <p style={{fontSize: '13px'}} className='text-slate-400'>Robindranath Tagor</p>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '-2px',
                                        left: '0',
                                        width: '100%',
                                        height: '50%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                                        zIndex: '2',
                                    }}
                                ></div>

                            </div>
                        }
                    </div>
                </div>
        </div>
        </div>
    )
}