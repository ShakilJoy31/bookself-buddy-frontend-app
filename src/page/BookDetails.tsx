import '../styles/dashboard.css';
import '../styles/individual.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { FaPlus } from 'react-icons/fa';
import { TbAlertOctagonFilled } from 'react-icons/tb';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import {
  useDeleteBookMutation,
  useGetSingleBookMutation,
} from '../redux/api/apiSlice';
import { useAppSelector } from '../redux/hook';
import { Navbar } from './Navbar';

export const BookDetails: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    let [getSingleBook, { data: singleBookData, isLoading: singleBookLoading }] = useGetSingleBookMutation();
    let [deleteBook, { data: deletedBookData, isLoading: deletedBookLoading }] = useDeleteBookMutation();

    console.log(deletedBookLoading);
    console.log(deletedBookData);
    const [individualBook, setIndividualBook] = useState(null)
    const user = useAppSelector((state) => state.user.userInfo);
    const [isLoggedInUser, setIsLoggedInUser] = useState(false);
    console.log(individualBook);
    useEffect(() => {
        getSingleBook(id);
        setIndividualBook(singleBookData?.data);
    }, [])
    useEffect(() => {
        const userFromStorage = localStorage.getItem('bookself-buddy-user');
        if (userFromStorage !== null) {
            setIsLoggedInUser(true);
        } else {
            setIsLoggedInUser(false);
        }
        if (user?.length > 0) {
            setIsLoggedInUser(true);
        }
    }, [user])

    const handleDeleteTheSpecificBook = async () => {
        await deleteBook(singleBookData?.data?._id);

        const modal = document.getElementById('beforeDeleteBookModal') as HTMLDialogElement | null
        if (modal) {
            modal.close();
            navigate('/');
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:px-16 md:px-10 px-3' data-aos="zoom-in-up">
                {/* {
                isCommentPermission && <p className='flex justify-center' style={{ padding: '5px', border: '1px solid crimson', background: 'rgba(220, 20, 60, 0.208)', marginTop: '10px' }}>{isCommentPermission}</p>
            } */}

                {
                    singleBookLoading ? <div>
                        <span style={{ color: 'crimson' }} className="loading loading-ring w-24 h-24 block mx-auto"></span>
                        <p style={{ fontFamily: 'Lucida Sans Unicode' }} className='text-white flex justify-center'>Loading. Please wait...</p>
                    </div> : <div className='text-white pt-[25px]'>
                        <div className={`container`}>
                            <div>
                                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                    <div className={`previewImage`}>
                                        <span style={{ zIndex: '1' }} className={`inStockSuggestion`}>Genre: {singleBookData?.data?.genre}</span>
                                        <img className={`mainImage w-full`} src={singleBookData?.data?.bookPicture[0]} />
                                    </div>
                                </div>
                            </div>


                            <div className={`headingLeftBorder lg:pl-3 md:pl-2`}>

                                {
                                    <div className='flex items-center gap-x-2'>
                                        <h1 style={{ fontSize: '1.675rem', fontWeight: '700' }}>{singleBookData?.data?.title}</h1>
                                    </div>
                                }

                                <div className='flex items-center my-4'>
                                    <p>Author: </p>
                                    <div className='ml-4'>
                                        <div className='flex items-center justify-evenly bg-slate-500 text-white hover:cursor-pointer px-[15px]'>
                                            {singleBookData?.data?.author}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center my-4'>
                                    <p>Published on: </p>
                                    <div className='ml-4'>
                                        <div className='flex items-center justify-evenly bg-slate-500 text-white hover:cursor-pointer px-[15px]'>
                                            {singleBookData?.data?.publicationDate}
                                        </div>
                                    </div>
                                </div>

                                <div>

                                    {
                                        isLoggedInUser && <div onClick={()=>{
                                            localStorage.setItem('bookToEdit', JSON.stringify(singleBookData?.data))
                                            navigate(`/edit-book/${singleBookData?.data?._id}`)
                                        }} className={`theButton hidden lg:block md:block`}>
                                            <button className={`btn border-0 btn-sm w-full lg:w-[300px] normal-case my-[12px] IndividualProductBuyNowButton`}>Edit</button>
                                        </div>
                                    }
                                    {
                                        isLoggedInUser && <div onClick={() => {
                                            const modal = document.getElementById('beforeDeleteBookModal') as HTMLDialogElement | null
                                            if (modal) {
                                                modal.showModal();
                                            }
                                        }} className={`theButton hidden lg:block md:block`}>
                                            <button className={`btn border-0 btn-sm w-full lg:w-[300px] normal-case IndividualProductBuyNowButton`}>Delete Tool</button>
                                        </div>
                                    }
                                </div>

                                {
                                    isLoggedInUser && <div onClick={()=>{
                                        localStorage.setItem('bookToEdit', JSON.stringify(singleBookData?.data))
                                        navigate(`/edit-book/${singleBookData?.data?._id}`)
                                    }} className={`theButton lg:hidden block md:hidden my-[12px]`}>
                                        <button className={`btn border-0 btn-sm w-full normal-case IndividualProductBuyNowButton}`}>Edit</button>
                                    </div>
                                }

                                {
                                    isLoggedInUser && <div onClick={() => {
                                        const modal = document.getElementById('beforeDeleteBookModal') as HTMLDialogElement | null
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }} className={`theButton lg:hidden block md:hidden`}>
                                        <button className={`btn border-0 btn-sm w-full normal-case IndividualProductBuyNowButton`}>Delete Book</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }


                <div style={{ borderTop: '2px solid crimson' }} className='my-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className=''> <svg className="gradient-text lg:text-2xl text-xl font-bold" width="100%" height="38" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: 'white' }} />
                                    <stop offset="50%" style={{ stopColor: 'magenta' }} />
                                    <stop offset="100%" style={{ stopColor: 'rgb(28,97,231)' }} />
                                </linearGradient>
                            </defs>
                            <text x="50%" y="30" fill="url(#gradient)" textAnchor="middle">Comments and reviews</text>
                        </svg></h1>

                        <span className={`plusCommnet`}><FaPlus size={25}></FaPlus></span>
                    </div>
                    {/* <Divider color='crimson'></Divider> */}
                </div>

            </div>



            <dialog id="beforeDeleteBookModal" className="modal ml-4 lg:ml-o md:ml-0">
                <div style={{
                    color: 'white',
                    background: 'black',
                    border: '2px solid crimson'
                }} className="modal-box">
                    <div>
                        <h3 className="flex justify-center text-white items-center gap-x-2"><span><TbAlertOctagonFilled size={30} color={'crimson'}></TbAlertOctagonFilled></span> <span>Hey, Attention please!</span></h3>
                        <h1 className="flex justify-center">Do you want to delete this book?</h1>
                        <div className='flex justify-between items-center mt-[24px]'>
                            <div onClick={() => {
                                const modal = document.getElementById('beforeDeleteBookModal') as HTMLDialogElement | null
                                if (modal) {
                                    modal.close();
                                }
                            }}>
                                <button className={`btn border-0 btn-sm bg-slate-400 hover:bg-white text-black w-[150px] normal-case `}>Cancel</button>
                            </div>

                            <div onClick={handleDeleteTheSpecificBook} className={`theButton`}>
                                {
                                    deletedBookLoading ? <div>
                                    <span style={{ color: 'crimson' }} className="loading loading-ring w-12 h-12 block mx-auto"></span>
                                </div> : <button className={`btn border-0 btn-sm w-[150px] normal-case IndividualProductBuyNowButton`}>Delete</button>
                                }

                            </div>

                        </div>

                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}