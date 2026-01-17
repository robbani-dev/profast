import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-1'>
                <h1 className='title-section text-neutral'>Forgot Password</h1>
                <p className='text-neutral'>Enter your email to reset your password</p>
            </div>
            <form className='flex flex-col gap-3'>
                <div>
                    <label className='label'>Email</label>
                    <input type='email' placeholder='Enter your email' className='input' />
                </div>
                <button type='submit' className='btn btn-primary text-neutral'>Send</button>
                <h4>Remember have an account? <Link href="/authentication/login" className='link'>Login</Link></h4>
            </form>
        </div>
    )
}

export default page