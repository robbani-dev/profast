
import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <div className='flex items-end relative'>
            <div className='h-12 w-8' >
                <Image src='/images/logo.png' alt='logo' width={38} height={48} />
            </div>
            <h1 className='text-3xl font-extrabold absolute bottom-0 -right-26.25'>Profast</h1>
        </div>
    )
}
