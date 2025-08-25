"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function LoginForm() {

    const router = useRouter()

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        try {
            const response = await signIn("credentials", { 
                email, 
                password, 
                callbackUrl: "/products",
                redirect: false,
             });

             if(response.ok){
                toast.success("Login Successful")
                router.push("/products");
                form.reset();
             }
             else {
                  toast.error("Failed to Login")
             }

        } catch (error) {
            toast.error("Authentication failed")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name='email' />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name='password' />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p>Don't have any account?<Link className='text-red-500' href={'/register'}>Register</Link></p>
            </fieldset>
        </form>
    )
}
