import '../styles/dashboard.css';
import '../styles/individual.css';

import React from 'react';

import { useParams } from 'react-router-dom';

export const BookDetails: React.FC<{}> = () => {
    const { id } = useParams(); 
    console.log(id);
    return (
        <div data-aos="zoom-in-up">
            {/* {
                isCommentPermission && <p className='flex justify-center' style={{ padding: '5px', border: '1px solid crimson', background: 'rgba(220, 20, 60, 0.208)', marginTop: '10px' }}>{isCommentPermission}</p>
            } */}
            <div className='text-white pt-[25px]'> 
                <div className={`container`}>
                    <div>
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <div className={`previewImage`}>
                                <span style={{ zIndex: '1' }} className={`inStockSuggestion`}>Available to hire</span>
                                <img className={`mainImage w-full`} src='https://bengaliebook.com/wp-content/uploads/2021/06/%E0%A6%AC%E0%A6%89-%E0%A6%A0%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%9F-768x1086.jpg' />
                            </div>
                        </div>
                    </div>


                    <div className={`headingLeftBorder lg:pl-3 md:pl-2`}>

                        {
                            <div className='flex items-center gap-x-2'>
                                <h1 style={{ fontSize: '1.675rem', fontWeight: '700' }}>Bou Thakuranir hat</h1>
                        </div>
                        }

                        <div className='flex items-center my-4'>
                            <p>Cost for Hiring: </p>
                            <div className='ml-4'>
                                <div className='flex items-center justify-evenly bg-slate-500 text-white hover:cursor-pointer px-[15px]'>
                                    
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={`theButton`}>
                                <button className={`btn border-0 btn-sm w-full lg:w-[300px] normal-case IndividualProductBuyNowButton`}>Procceed to Hire</button>
                            </div>
                            {
                                <div className={`theButton hidden lg:block md:block`}>
                                    <button className={`btn border-0 btn-sm w-full lg:w-[300px] normal-case my-[12px] IndividualProductBuyNowButton`}>Edit</button>
                                </div>
                            }
                            {
                                <div className={`theButton hidden lg:block md:block`}>
                                    <button className={`btn border-0 btn-sm w-full lg:w-[300px] normal-case IndividualProductBuyNowButton`}>Delete Tool</button>
                                </div>
                            }
                        </div>

                        {
                            <div className={`theButton lg:hidden block md:hidden my-[12px]`}>
                                <button className={`btn border-0 btn-sm w-full normal-case IndividualProductBuyNowButton}`}>Edit</button>
                            </div>
                        }

                        {
                            <div className={`theButton lg:hidden block md:hidden`}>
                                <button className={`btn border-0 btn-sm w-full normal-case IndividualProductBuyNowButton`}>Delete Book</button>
                            </div>
                        }
                    </div>
                </div>
            </div>


            <div>
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

                    {/* <span className={`${IndividualCSS.plusCommnet}`} onClick={handleUserWantsToComment}><FaPlus size={25}></FaPlus></span> */}
                </div>
                {/* <Divider color='crimson'></Divider> */}
            </div>


            {/* {
                individualProduct?.comments ? <div className='mb-8'>
                    <CommentsAndReviews individualProduct={individualProduct} setIndividualProduct={setIndividualProduct}></CommentsAndReviews>
                </div> : <p className='mt-2 flex justify-center'>Be the first one to comment</p>
            } */}



            {/* The modal for taking comment and stars of the mentioned field */}
            {
                // <dialog id="readyToCommentModal" className="modal">
                //     <div className={`${IndividualCSS.toCommentModal} modal-box`}>

                //         <span onClick={HandlePostingCommentOnTool} style={{ zIndex: '1' }} className={`${IndividualCSS.postingComment} w-[165px]`}><span className='flex justify-center'>Post</span></span>

                //         <div>
                //             <h1 className='mb-1'>Leave your comment</h1>
                //             <div className={`flex items-center ${MyServiceCSS.tableRoomInput}`}>
                //                 <textarea
                //                     onChange={(e) => setComment(e.target.value)}
                //                     style={{
                //                         borderRadius: verificationFieldsRound,
                //                         background: 'white',
                //                     }}
                //                     placeholder={`Hi ${authenticatedUser.name} Please type your comment here`}
                //                     className={`w-full h-[55px] focus:outline-none border-0 pl-1 text-black`}
                //                     type="text"
                //                     name=""
                //                     id=""
                //                 />
                //             </div>
                //         </div>

                //         <div className='mb-3'><Divider color='crimson'></Divider></div>

                //         <div>
                //             <h3 className="flex justify-center text-white text-xl">How was the performance if this equipment?</h3>
                //             <div className='flex justify-evenly items-center'>
                //                 {[1, 2, 3, 4, 5].map((value) => (
                //                     <span
                //                         key={value}
                //                         onClick={() => setEquipmentPerformance(value)}>
                //                         <IoStar size={25} color={`${value <= equipmentPerformance ? 'crimson' : 'white'}`}></IoStar>
                //                     </span>
                //                 ))}
                //             </div>
                //         </div>

                //         <div className='mb-3'><Divider color='slategrey'></Divider></div>

                //         <div>
                //             <h3 className="flex justify-center text-white text-xl">How was the customer service?</h3>
                //             <div className='flex justify-evenly items-center'>
                //                 {[1, 2, 3, 4, 5].map((value) => (
                //                     <span
                //                         key={value}
                //                         onClick={() => setCustomerService(value)}>
                //                         <IoStar size={25} color={`${value <= customerService ? 'crimson' : 'white'}`}></IoStar>
                //                     </span>
                //                 ))}
                //             </div>
                //         </div>

                //         <div className='mb-3'><Divider color='slategrey'></Divider></div>

                //         <div>
                //             <h3 className="flex justify-center text-white text-xl">Are you satiesfied with the support services?</h3>
                //             <div className='flex justify-evenly items-center'>
                //                 {[1, 2, 3, 4, 5].map((value) => (
                //                     <span
                //                         key={value}
                //                         onClick={() => setSupportServices(value)}>
                //                         <IoStar size={25} color={`${value <= supportServices ? 'crimson' : 'white'}`}></IoStar>
                //                     </span>
                //                 ))}
                //             </div>
                //         </div>

                //         <div className='mb-3'><Divider color='slategrey'></Divider></div>

                //         <div>
                //             <h3 className="flex justify-center text-white text-xl">How was the support after sales?</h3>
                //             <div className='flex justify-evenly items-center'>
                //                 {[1, 2, 3, 4, 5].map((value) => (
                //                     <span
                //                         key={value}
                //                         onClick={() => setAfterSales(value)}>
                //                         <IoStar size={25} color={`${value <= afterSales ? 'crimson' : 'white'}`}></IoStar>
                //                     </span>
                //                 ))}
                //             </div>
                //         </div>

                //         <div className='mb-3'><Divider color='slategrey'></Divider></div>

                //         <div>
                //             <h3 className="flex justify-center text-white text-xl">Are you satiesfieds with miscellaneous support?</h3>
                //             <div className='flex justify-evenly items-center'>
                //                 {[1, 2, 3, 4, 5].map((value) => (
                //                     <span
                //                         key={value}
                //                         onClick={() => setMiscellaneous(value)}>
                //                         <IoStar size={25} color={`${value <= miscellaneous ? 'crimson' : 'white'}`}></IoStar>
                //                     </span>
                //                 ))}
                //             </div>
                //         </div>

                //     </div>
                //     <form method="dialog" className="modal-backdrop">
                //         <button>close</button>
                //     </form>
                // </dialog>
            }



            {/* The warning modal to delete the product*/}
            {/* <dialog id="beforeDelete" className="modal">
                <div style={{
                    color: 'white',
                    background: 'black',
                    border: '2px solid crimson'
                }} className="modal-box">
                    <div>
                        <h3 className="flex justify-center text-white items-center gap-x-2"><span><TbAlertOctagonFilled size={30} color={'black'}></TbAlertOctagonFilled></span> <span>Hey, Attention please!</span></h3>
                        <h1 className="flex justify-center">Do you want to delete this product?</h1>
                        <h1 className="flex justify-center">This is not reverseable!</h1>
                        <div className='flex justify-between items-center mt-[24px]'>
                            <div onClick={() => document.getElementById('beforeDelete').close()}>
                                <button className={`btn border-0 btn-sm bg-white text-black w-[150px] normal-case `}>Cancel</button>
                            </div>

                            <div onClick={handleDeleteProductByAdmin} className={`${IndividualCSS.theButton}`}>
                                <button className={`btn border-0 btn-sm w-[150px] normal-case ${DashboardCSS.IndividualProductBuyNowButton}`}>Delete Tool</button>
                            </div>
                        </div>

                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}


            {/* Modal for successfully hired a tool */}
            {/* <dialog id="placeOrderModal" className="modal">
                <div style={{
                    color: 'white',
                    background: 'black',
                    border: '2px solid crimson'
                }} className="modal-box">
                    Your hiring request is receieved. Please wait for the confirmation! <br></br>
                    Thank you so fuch for being with <span  className='underline'>Shelton-tool</span>

                    <p onClick={() => router.push('/user-order')} className='flex items-center gap-x-3 text-slate-300 hover:text-white hover:cursor-pointer mt-3 justify-center'>Go to Dashboard</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}

        </div>
    )
}