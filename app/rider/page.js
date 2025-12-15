import Image from 'next/image'
import React from 'react'

const Rider = () => {
    return (
        <div className='st-container'>
            <div className='st-container bg-base-200 rounded-2xl'>
                <div className=''>
                    <h1 className='title-section'>Be a Rider</h1>
                    <p className='lg:max-w-[50%]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='w-full border my-8'></div>
                <div className='lg:grid grid-cols-2 gap-2'>
                    <div>


                        

                    </div>
                    <div><Image src="/images/rider.png" alt='Rider driving a bike' width={450} height={450} className='mx-auto'/></div>
                </div>
            </div>
        </div>
    )
}

export default Rider