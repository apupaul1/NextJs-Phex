"use client";

import { useSession } from "next-auth/react";
import ProductForm from "./ProductForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AddPhoneForm() {

  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <span className="loading loading-dots loading-lg"></span>
  }

  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Add New Phone
      </h1>
      <ProductForm></ProductForm>
    </div>
  );
}
