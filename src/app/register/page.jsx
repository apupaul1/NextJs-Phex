import React from 'react'
import RegisterForm from './components/RegisterForm'

export default function Register() {
    return (
        <div className="hero bg-base-200 py-6">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left mb-3">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 p-4 w-full max-w-xl shrink-0 shadow-2xl">
                    <div className="card-body">
                        <RegisterForm></RegisterForm>
                    </div>
                </div>
            </div>
        </div>
    )
}
