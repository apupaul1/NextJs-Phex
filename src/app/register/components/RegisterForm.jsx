"use client"

import { registerUser } from '@/app/actions/auth/registerUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function RegisterForm() {

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        try {
            const response = await registerUser({ email, password });
            console.log(response);
            if (response.
                acknowledged
            ) {
                toast.success("Register Successful")
                router.push("/products");
                form.reset();
            }
            else {
                toast.error("Failed to Register")
            }
        } catch (error) {
            toast.error("Authentication failed")
        }

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
