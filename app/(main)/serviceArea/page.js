import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ServiceArea = () => {
    return (
        <div className='st-container bg-base-200 rounded-2xl py-20'>
            <div className='flex flex-col gap-12'>
                <h1 className='title-section'>We are available in 64 districts</h1>
                <div className="w-full max-w-2xl">
                    <div className="flex items-center bg-base-100 rounded-full pl-5 ">

                        {/* Icon */}
                        <Search size={20} className="text-gray-500 mr-4" />

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search tracking code here"
                            className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
                        />

                        {/* Button */}
                        <button className="bg-primary hover:bg-lime-400 text-black font-semibold px-8 py-3 rounded-full transition">
                            Search
                        </button>
                    </div>
                </div>
                <div className="relative w-full h-106.5">
                    <Image
                        src="/images/map.png"
                        alt="Service Area Map"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            {/* bar */}
            <div className='h-bar'></div>
            <div className='flex flex-col gap-12'>
                <h3 className='title-card'>We deliver almost all over Bangladesh.</h3>
            </div>
        </div>
    )
}

export default ServiceArea