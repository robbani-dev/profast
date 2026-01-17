import GoogleLogin from '@/components/GoogleLogin'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-1'>
                <h1 className='title-section text-neutral'>Welcome Back</h1>
                <p className='text-neutral'>Login with Profast</p>
            </div>
            <form className='flex flex-col gap-3'>
                <div>
                    <label className='label'>Email</label>
                    <input type='email' placeholder='Enter your email' className='input' />
                </div>
                <div>
                    <label className='label'>Password</label>
                    <input type='password' placeholder='Enter your password' className='input' />
                </div>
                <Link href="/authentication/reset-password" className='underline'>Forget Password?</Link>
                <button type='submit' className='btn btn-primary text-neutral'>Login</button>
                <h4>Don't have an account? <Link href="/authentication/register" className='link'>Register</Link></h4>
                <h4 className='text-center'>Or</h4>
                <GoogleLogin />
            </form>
        </div>
    )
}

export default Login