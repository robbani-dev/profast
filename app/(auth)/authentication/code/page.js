import Link from 'next/link'
import React from 'react'

const Code = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-1'>
                <h1 className='title-section text-neutral'>Enter Code</h1>
                <p className='text-neutral'>Enter the code sent to your email</p>
            </div>
            <form className='flex flex-col gap-3'>
                <div>
                    <label className='label'>Code</label>
                    <input type='number' placeholder='Enter your code' className='input' />
                </div>
                <button type='submit' className='btn btn-primary text-neutral'>Verify Code</button>
            </form>
        </div>
    )
}

export default Code