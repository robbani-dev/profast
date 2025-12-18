"use client"
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

const Pricing = () => {



    const { register, handleSubmit, formState: { errors } } = useForm();

    const manageSubmit = (data) => console.log(data)



    return (
        <div className='st-container'>
            <div className='st-container bg-base-200 rounded-2xl'>
                <div className=''>
                    <h1 className='title-section'>Pricing Calculator</h1>
                    <p className='lg:max-w-[50%]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='w-full border my-8'></div>
                <div className='lg:grid grid-cols-2 gap-2'>

                    {/* Form start here -----------------------------------------------------------------------------------------------------------------*/}
                    <div className='w-3xl flex justify-center items-center'>
                        <form className="fieldset" onSubmit={handleSubmit(manageSubmit)}>

                            <div className='flex gap-4'>

                                <button className='btn text-neutral w-40'>Reset</button>
                                <button className='btn text-neutral bg-primary w-60'>Calculate</button>
                            </div>

                        </form>



                    </div>
                    {/* Form end here ----------------------------------------------------------------------------------------------------------------- */}

                    <div className='flex justify-center items-center'>
                        
                        <h1 className='text-7xl text-neutral font-black'>250 TK</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing