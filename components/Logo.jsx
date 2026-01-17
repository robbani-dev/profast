
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div>
            <Link href="/" className='h-12 flex'>
                <Image src='/images/logo.png' alt='logo' width={32} height={23} className=''/>
                <span className='text-3xl font-extrabold mt-4 -ml-4 text-[#03373D]'>Profast</span>
            </Link>
        </div>
    )
}
