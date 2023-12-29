import React from 'react';

export const Spinner: React.FC<{}> = () => {
    return (
        <div>
            <div className='w-full min-h-screen items-center flex justify-center'>
                <div>
                    <span style={{ color: 'crimson' }} className="loading loading-ring w-24 h-24 block mx-auto"></span>
                    <p style={{ fontFamily: 'Lucida Sans Unicode' }} className='text-white flex justify-center'>Loading. Please wait...</p>
                </div>
            </div>
        </div>
    )
}