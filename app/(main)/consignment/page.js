import { Search } from 'lucide-react'
import React from 'react'

const Consignment = () => {
    return (
        <div className='st-container bg-base-200 rounded-2xl py-20'>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-4'>
                    <h1 className='title-section'>Track Your Consignment</h1>
                    <p>Now you can easily track your consignment</p>
                </div>
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
            </div>
            {/* bar */}
            <div className='h-bar'></div>

            <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-base-100 rounded-[50px] p-12'>
                    <h3 className='title-card'>Product Details</h3>
                </div>
                <div className='bg-base-100 rounded-[50px] p-12'>
                    <h3 className='title-card'>Tracking Updates</h3>
                </div>
            </div>
        </div>
    )
}

export default Consignment