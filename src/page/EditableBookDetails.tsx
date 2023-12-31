import '../styles/componentStyle.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

import { useUpdateBookMutation } from '../redux/api/apiSlice';

export const EditableBookDetails: React.FC<{}> = () => {
    // let [addBook, { data, isLoading }] = useAddBookMutation();
    let [updateBook, { isLoading }] = useUpdateBookMutation();
    const [bookId, setBookId] = useState('')
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [genreName, setGenreName] = useState('')
    const [publicationDate, setPublicationDate] = useState('');
    const [hostedImages, setHostedImages] = useState<string[]>([]);
    const [picture, setPicture] = useState<File | null>(null);
    useEffect(() => {
        const getProductForEdit = localStorage.getItem('bookToEdit');
        if (getProductForEdit !== null) {
            const parsedProduct = JSON.parse(getProductForEdit);
            setBookId(parsedProduct?._id)
            setBookName(parsedProduct?.title);
            setAuthorName(parsedProduct?.author);
            setGenreName(parsedProduct?.genre);
            setPublicationDate(parsedProduct?.publicationDate);
            setHostedImages(parsedProduct?.bookPicture);
        }
    }, []);    
    const ImageStorageKey = "1f2e07ae412954d520f52351b07dee66";
    const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
    if (picture) {
        const formDataImage = new FormData();
        formDataImage.append("image", picture);
        fetch(url, {
            method: 'POST',
            body: formDataImage,
        })
            .then((res) => res.json())
            .then((result) => {
                setHostedImages([result.data.display_url]);
                setPicture(null);
            });
    }

    setTimeout(function () {
        const modal = document.getElementById('bookSuccessfullyUpdateModal') as HTMLDialogElement | null
        if (modal) {
            modal.close();
        }
    }, 3800);

    const handleRemoveImage = (getImage: string) => {
        const restImage = hostedImages?.filter(img => img !== getImage);
        setHostedImages(restImage);
    }
    const handleEditSpecificBook = async () => {
        const modal = document.getElementById('bookSuccessfullyUpdateModal') as HTMLDialogElement | null
        if (modal) {
            modal.showModal();
        }

        const bookData = {
            title: bookName,
            author: authorName,
            genre: genreName,
            publicationDate: publicationDate,
            bookPicture: hostedImages,
            comments: []
        }
        await updateBook({ id: bookId, updatedData: bookData })
    }
    return (
        <div className={`pt-[24px] mx-2 md:mx-4 lg:mx-6`}>
            <div className={`blurre`}>
                <div className='flex lg:justify-end md:justify-end justify-center mb-2 gap-x-2'>
                    <button onClick={handleEditSpecificBook} style={{ background: 'purple', borderRadius: '5px' }} className="py-[5px] px-[3px] md:px-[3px] text-white lg:px-[5px]">Edit Book</button>

                </div>

                <div>
                    <div>
                        <span className=''>Book Name</span>
                        {
                            <textarea onChange={(e) => setBookName(e.target.value)} style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md text-white" placeholder='Type Book Name' value={bookName} />
                        }
                    </div>
                </div>


                <div>
                    <div>
                        <span className=''>Author Name</span>
                        {
                            <textarea value={authorName} onChange={(e) => setAuthorName(e.target.value)} style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md text-white " placeholder='Type Author Name' />
                        }

                    </div>
                </div>


                <div>
                    <div>
                        <span className=''>Genre Name</span>
                        {
                            <textarea value={genreName} onChange={(e) => setGenreName(e.target.value)} style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md text-white" placeholder='Type Genre Name' />
                        }

                    </div>
                </div>


                <div>
                    <div>
                        <span className=''>Publication Date</span>
                        {
                            <textarea value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} style={{ background: 'purple' }} className="w-full pt-2 input focus:outline-none input-md text-white " placeholder='Type Publication Date' />
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
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]; // Null check added here
                                        if (file) {
                                            setPicture(file);
                                        }
                                    }}
                                    style={{ position: "absolute", opacity: "0" }}
                                    type="file"
                                    className="h-[120px]"
                                />
                                <span className='flex justify-center mt-[32px]'><AiOutlineCloudUpload size={35} color={'white'}></AiOutlineCloudUpload></span>
                                <p className="flex justify-center text-white">
                                    Click to upload
                                </p>
                            </div>

                            {
                                hostedImages?.length > 0 && <div style={{ position: 'relative' }}>
                                    <span onClick={() => handleRemoveImage(hostedImages[0])} style={{ position: 'absolute', top: '5px', right: '5px' }}><RxCross1 size={25} color={'red'}></RxCross1></span>
                                    <img
                                        className="w-[120px] h-[120px] rounded-sm"
                                        src={hostedImages[0]}
                                        alt=""
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* Model if book successfully updated */}
            <dialog id="bookSuccessfullyUpdateModal" className="modal">
                <div style={{
                    color: 'white',
                    background: 'black',
                    border: '2px solid crimson'
                }} className="modal-box">
                    <div>
                        {
                            isLoading ? <div>
                                <span style={{ color: 'crimson' }} className="loading loading-ring w-24 h-24 block mx-auto"></span>
                                {/* <span className="loading loading-ring loading-lg"></span> */}
                                <p style={{ fontFamily: 'Lucida Sans Unicode' }} className='text-white flex justify-center'>Updating book. Please wait...</p>
                            </div> : <h1 className="flex justify-center">Book updated successfully.</h1>
                        }

                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}