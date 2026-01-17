import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex flex-col gap-12'>
            <Navbar />
            <div>
                <div className='st-container bg-base-200 rounded-2xl py-20'>
                    <div className='flex justify-center'>
                        <Image src="/images/404.png" alt="Not Found" width={400} height={400} />
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/"><button className="btn btn-primary rounded-xl text-black">Go Home</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound