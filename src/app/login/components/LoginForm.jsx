"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      // signIn with credentials, redirect is false so we can handle manually
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.ok) {
        toast.success("Login Successful!");
        form.reset();
        router.push("/products"); // redirect to products page
      } else {
        toast.error(response?.error || "Failed to login. Check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Authentication failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <fieldset className="flex flex-col gap-4">
        <legend className="text-2xl font-semibold mb-4">Login</legend>

        <label htmlFor="email" className="font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="input input-bordered w-full"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password" className="font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="input input-bordered w-full"
          placeholder="Enter your password"
          required
        />

        <div className="text-right mb-2">
          <Link href="/forgot-password" className="link link-hover text-sm">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className={`btn btn-neutral mt-2 ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? <span className="loading loading-dots loading-lg"></span> : "Login"}
        </button>

        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </fieldset>
    </form>
  );
}
