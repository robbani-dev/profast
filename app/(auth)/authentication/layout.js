import Logo from '@/components/Logo'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const authLayout = ({ children }) => {

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='max-w-360 w-full mx-auto pt-6'>
        <div className='grid md:grid-cols-2'>
          <div className='bg-base-200 w-full p-10'>
            <Logo />
            <div className='mt-5 md:mt-10 max-w-105  mx-auto'>{children}</div>
          </div>
          <div className='bg-[#FAFDF0] flex justify-center items-center py-10 md:py-50'>
            <Image src="/images/auth-image.png" alt="Auth Background" width={425.73} height={356.47}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default authLayout