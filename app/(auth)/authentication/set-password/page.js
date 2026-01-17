import React from 'react'

const SetPassword = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-1'>
                <h1 className='title-section text-neutral'>Reset Password</h1>
                <p className='text-neutral'>Enter your new password</p>
            </div>
            <form className='flex flex-col gap-3'>
                <div>
                    <label className='label'>New Password</label>
                    <input type='password' placeholder='Enter your new password' className='input' />
                </div>
                <div>
                    <label className='label'>Confirm New Password</label>
                    <input type='password' placeholder='Confirm your new password' className='input' />
                </div>
                <button type='submit' className='btn btn-primary text-neutral'>Reset Password</button>
            </form>
        </div>
    )
}

export default SetPassword