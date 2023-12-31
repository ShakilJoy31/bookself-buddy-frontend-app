import '../styles/dashboard.css';

import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useGetBooksQuery } from '../redux/api/apiSlice';
import { useAppSelector } from '../redux/hook';
import { INewBook } from '../types/globalTypes';

export const Books: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { isLoading } = useGetBooksQuery(undefined);
    const theBooksFromDB = useAppSelector((state) => state.book.books);
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

                {
                    isLoading ? <div>
                    <span style={{ color: 'crimson' }} className="loading loading-ring w-24 h-24 block mx-auto"></span>
                    <p style={{ fontFamily: 'Lucida Sans Unicode' }} className='text-white flex justify-center'>Loading. Please wait...</p>
                </div> : <div>
                    {
                        theBooksFromDB?.length < 1 ? <p style={{color: 'crimson'}} className='flex justify-center mt-4 lg:text-xl'>Sorry! No books found with the search name </p> : <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[24px] py-6 w-full' style={{ overflow: 'hidden' }}>
                        {
                            theBooksFromDB?.map((book: INewBook, index:number)=> <div onClick={()=> navigate(`/books/${book._id}`)} key={index} style={{
                                borderRadius: '8px',
                                border: '2px solid crimson'
                            }} className={`w-full hover:cursor-pointer imageContainer productBackground`} data-aos="zoom-in-up">
                                <div className={`imageContainer`}>
                                    <figure><img className='lg:h-[220px] md:h-[200px] h-[180px]' src={book?.bookPicture?.[0]} alt="Product Image" style={{ width: '100%', objectFit: 'cover', borderRadius: '0 8px 0 0' }} /></figure>
                                </div>

                                <div style={{ position: 'absolute', bottom: '5px', zIndex: '3' }} className="px-1 w-full">
                                    <h2 className={`productTitle flex justify-center mb-[2px]`}>{book?.title}</h2>

                                    <div className="flex justify-center w-full">
                                        <p style={{ fontSize: '13px' }} className='text-slate-300'>{book?.author}</p>
                                    </div>

                                    <div className='flex justify-between items-center lg:px-2 md:px-2 px-1'>
                                    <p style={{ fontSize: '13px' }} className='text-slate-500'>{book?.genre}</p>

                                    <p style={{ fontSize: '13px' }} className='text-slate-500'>{book?.publicationDate}</p>
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

                            </div>)
                        }
                    </div>
                    }
                    
                </div>
                }
                
            </div>
        </div>
    )
}