"use client"
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

const Rider = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const manageSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='st-container bg-base-200 rounded-2xl'>
            <div>
                <div>
                    <h1 className='title-section'>Be a Rider</h1>
                    <p className='lg:max-w-[50%]'>
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                <div className='h-bar'></div>

                <div className='lg:grid grid-cols-2 gap-2'>
                    {/* Form start */}
                    <div>
                        <form className="fieldset" onSubmit={handleSubmit(manageSubmit)}>
                            <div className='grid grid-cols-2 gap-2'>

                                {/* Name */}
                                <div>
                                    <label className="label">Your Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className='input'
                                        type='text'
                                        placeholder='Your Name'
                                    />
                                    {errors.name && (
                                        <span className="mt-1 block text-sm text-error">
                                            Name is required
                                        </span>
                                    )}
                                </div>

                                {/* Age */}
                                <div>
                                    <label className="label">Your age</label>
                                    <input
                                        {...register("age", { min: 18, max: 60, required: true })}
                                        className='input'
                                        type='number'
                                        placeholder='Your age'
                                    />
                                    {errors.age?.type === "min" && (
                                        <span className="mt-1 block text-sm text-error">
                                            Minimum required age is 18
                                        </span>
                                    )}
                                    {errors.age?.type === "max" && (
                                        <span className="mt-1 block text-sm text-error">
                                            Maximum allowed age is 60
                                        </span>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="label">Your email</label>
                                    <input
                                        {...register("email", { required: true })}
                                        className='input'
                                        type='email'
                                        placeholder='Email'
                                    />
                                    {errors.email && (
                                        <span className="mt-1 block text-sm text-error">
                                            Email is required
                                        </span>
                                    )}
                                </div>

                                {/* Region */}
                                <div>
                                    <label className="label">Your Region</label>
                                    <select
                                        {...register("region", { required: "Region is required" })}
                                        className={`select input ${errors.region ? "border-error" : ""}`}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select your region</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Pabna">Pabna</option>
                                        <option value="Bogura">Bogura</option>
                                        <option value="Sylhet">Sylhet</option>
                                    </select>
                                    {errors.region && (
                                        <span className="mt-1 block text-sm text-error">
                                            {errors.region.message}
                                        </span>
                                    )}
                                </div>

                                {/* NID */}
                                <div>
                                    <label className="label">NID No</label>
                                    <input
                                        {...register("nid", { required: true })}
                                        className='input'
                                        type='number'
                                        placeholder='NID No'
                                    />
                                    {errors.nid && (
                                        <span className="mt-1 block text-sm text-error">
                                            NID is required
                                        </span>
                                    )}
                                </div>

                                {/* Contact */}
                                <div>
                                    <label className="label">Contact No</label>
                                    <input
                                        {...register("contact", { required: true })}
                                        className='input'
                                        type='number'
                                        placeholder='Contact No'
                                    />
                                    {errors.contact && (
                                        <span className="mt-1 block text-sm text-error">
                                            Contact No is required
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Wire house */}
                            <div>
                                <label className="label">Which wire-house you want to work?</label>
                                <select
                                    {...register("wireHouse", { required: "Wire-house is required" })}
                                    className={`select input ${errors.wireHouse ? "border-error" : ""}`}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select wire-house</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Pabna">Pabna</option>
                                    <option value="Bogura">Bogura</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                                {errors.wireHouse && (
                                    <span className="mt-1 block text-sm text-error">
                                        {errors.wireHouse.message}
                                    </span>
                                )}
                            </div>

                            <input type='submit' className='btn bg-primary text-neutral mt-4' />
                        </form>
                    </div>
                    {/* Form end */}

                    <div>
                        <Image
                            src="/images/rider.png"
                            alt='Rider driving a bike'
                            width={450}
                            height={450}
                            className='mx-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rider
