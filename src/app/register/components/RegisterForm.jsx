"use client"

import { registerUser } from '@/app/actions/auth/registerUser'
import Link from 'next/link'
import React from 'react'

export default function RegisterForm() {

const handleSubmit = async(e) =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    await registerUser({email,password});
}

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                <label className="label">Email</label>
                <input 
                type="email" 
                className="input" 
                placeholder="Email"
                name='email' />
                <label className="label">Password</label>
                <input
                type="password" 
                className="input" 
                placeholder="Password"
                name='password' />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Register</button>
                <p>Already have an account?<Link className='text-red-500' href={'/login'}>Login</Link></p>
            </fieldset>
        </form>
    )
}
