import GoogleLogin from '@/components/GoogleLogin'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-1'>
                <h1 className='title-section text-neutral'>Create an Account</h1>
                <p className='text-neutral'>Register with Profast</p>
            </div>
            <form className='flex flex-col gap-3'>
                <div>
                    <label className='label'>Name</label>
                    <input type='text' placeholder='Enter your name' className='input' />
                </div>
                <div>
                    <label className='label'>Email</label>
                    <input type='email' placeholder='Enter your email' className='input' />
                </div>
                <div>
                    <label className='label'>Password</label>
                    <input type='password' placeholder='Enter your password' className='input' />
                </div>
                <button type='submit' className='btn btn-primary text-neutral'>Register</button>
                <h4>Already have an account? <Link href="/authentication/login" className='link'>Login</Link></h4>
                <h4 className='text-center'>Or</h4>
                <GoogleLogin />
            </form>
        </div>
    )
}

export default Register