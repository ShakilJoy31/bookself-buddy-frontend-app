import React, {
  useEffect,
  useState,
} from 'react';

import { BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
// import { IoLogOut } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import { TbAlertOctagonFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../redux/features/user/userSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../redux/hook';

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.userInfo);
    const [isLoggedInUser, setIsLoggedInUser] = useState(false);
    useEffect(() => {
        const userFromStorage = localStorage.getItem('bookself-buddy-user');
        if (userFromStorage !== null) {
            setIsLoggedInUser(true);
        } else {
            setIsLoggedInUser(false);
        }
    }, []);
    const logOutConfirmed = () => {
        dispatch(setUser(null))
        localStorage.removeItem('bookself-buddy-user')
        setIsLoggedInUser(false)
        const modal = document.getElementById('beforeLogoutModal') as HTMLDialogElement | null
          if (modal) {
              modal.close();
          }
    }

    const drawer = <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>;
    return (
        <div className='mx-2 md:mx-4 lg:mx-6'>
            <div className="lg:flex md:flex justify-between items-center lg:pt-[24px] md:pt-[18px] pt-0">
                {/* For mobile user */}
                <div className='flex items-center lg:hidden md:hidden w-full mb-2'>
                    <div>
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="drawer-button"><span className='hover:cursor-pointer'><LuMenu color={'white'} size={25}></LuMenu></span></label>
                            </div>

                            <div style={{ zIndex: '4' }} className="drawer-side">
                                {drawer}
                                <div className='min-h-screen bg-slate-500'>
                                    <button className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>All Books</button>

                                    {
                                        isLoggedInUser ? <button onClick={() => {
                                            const modal = document.getElementById('beforeLogoutModal') as HTMLDialogElement | null
                                            if (modal) {
                                                modal.showModal();
                                            }
                                        }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>Logout</button> : <button onClick={() => {
                                            navigate('/login')
                                        }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>Login</button>
                                    }
                                    {
                                        isLoggedInUser ? '' : <button onClick={() => {
                                            navigate('/signup')
                                        }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>Sign up</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`block mx-auto`}>
                        <p className={`hover:cursor-pointer flex items-center gap-x-2`}>Book self Buddy</p>
                    </div>


                    <div className="flex items-center ml-2 gap-x-2">
                        <label className="flex items-center justify-between" htmlFor="settingsModal"><span className={`hover:cursor-pointer`}><FaUserCircle size={25}></FaUserCircle></span></label>
                    </div>


                </div>

                <div className='flex items-center w-full'>
                    <div style={{ border: '1px solid crimson', background: 'black' }} className="join flex items-center">

                        <span style={{ borderRight: '1px solid crimson' }} className='px-1'>
                            <BiSearch color={'crimson'} size={25}></BiSearch>
                        </span>

                        <div>
                            <div style={{ borderRight: '1px solid crimson' }}>
                                <input style={{ background: 'black', color: 'crimson', borderRight: '1px solid crimson' }} className="input focus:border-0 join-item" placeholder="Search" />
                            </div>
                        </div>

                        <select style={{ background: 'black', color: 'crimson' }} className="input focus:border-0 join-item">
                            <option disabled selected>Filter by</option>
                            <option>Genre </option>
                            <option>Publication year</option>
                        </select>
                    </div>
                </div>


                {/* {
              isInputForTheProduct ? <div style={{ position: 'absolute', zIndex: '1000', background: 'crimson' }} className={`text-white mr-[10px] lg:mr-0 md:mr-0 lg:w-[450px] ${MyServiceCSS.searchResult}`} data-aos="zoom-in-up">
                {
                  products?.map((product, index) => <div onClick={() => {
                    router.push(`/products/${product._id}`)
                    setTimeout(function () {
                      setInputForTheProduct(false)
                    }, 600);
                  }} key={index} style={{ borderBottom: products.length !== index + 1 ? '1px solid white' : '' }} className={`flex items-center gap-x-2 p-1 ${MyServiceCSS.searchedProduct}`} data-aos="zoom-in-up">
                    <div>
                      <img src={product?.productPicture[0]} alt="Product Image" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '0 8px 0 8px' }} />
                    </div>
  
                    <div className='w-full'>
                      <p className='font-bold'>{product?.title}</p>
  
                      <div className='flex justify-between items-center mt-2'>
                        <p style={{ fontSize: '15px' }} className='text-black'>{product.hourlyHire}/hour</p>
                        <p style={{ fontSize: '15px' }} className='text-black'>{product.dailyHire}/day</p>
                        <p style={{ fontSize: '15px' }} className='text-black'>{product.longTermHire}/custom</p>
                      </div>
                    </div>
                  </div>)
                }
              </div> : ''
            } */}

                {
                    <div className="lg:flex md:flex items-center hidden ml-2 gap-x-2">
                        <button onClick={() => {
                            navigate('/add-new-book')
                        }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>+ Add New</button>

                        <button className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>All Books</button>

                        {
                            isLoggedInUser ? <button onClick={() => {
                                const modal = document.getElementById('beforeLogoutModal') as HTMLDialogElement | null
                                if (modal) {
                                    modal.showModal();
                                }
                            }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>Logout</button> : <button onClick={() => {
                                navigate('/login')
                            }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>Login</button>
                        }
                        {
                            isLoggedInUser ? '' : <button onClick={() => {
                                navigate('/signup')
                            }} className={`btn border-0 btn-sm w-full lg:w-[100px] normal-case`}>Sign up</button>
                        }


                    </div>
                }

            </div>

            {/* Before logout */}
            <dialog id="beforeLogoutModal" className="modal">
                <div style={{
                    color: 'white',
                    background: 'black',
                    border: '2px solid crimson'
                }} className="modal-box">
                    <div>
                        <h3 className="flex justify-center text-white items-center gap-x-2"><span><TbAlertOctagonFilled size={30} color={'crimson'}></TbAlertOctagonFilled></span> <span>Hey, Attention please!</span></h3>
                        <h1 className="flex justify-center">Do you want to log out?</h1>
                        <div className='flex justify-between items-center mt-[24px]'>
                            <div onClick={() => {
                                const modal = document.getElementById('beforeLogoutModal') as HTMLDialogElement | null
                                if (modal) {
                                    modal.close();
                                }
                            }}>
                                <button className={`btn border-0 btn-sm bg-slate-400 hover:bg-white text-black w-[150px] normal-case `}>Cancel</button>
                            </div>

                            <div onClick={logOutConfirmed} className={`theButton`}>
                                {
                                    <button className={`btn border-0 btn-sm w-[150px] normal-case IndividualProductBuyNowButton`}>Log out</button>
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