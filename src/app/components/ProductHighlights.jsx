import dbConnect from '@/lib/dbConnect';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default async function ProductHighlights() {

    // const res = await fetch('https://nextjs-phone-mirror.vercel.app', {
    //     cache: "no-store"
    // });
    // const products = await res.json()

const phoneCollection = dbConnect("phoneCollection")
const products = await phoneCollection.find({}).toArray();

    return (
        <div className='bg-amber-100 p-2'>
            <div className='max-w-7xl mx-auto my-8 '>
                <h1 className='text-3xl text-center mb-8'>Product Highlights</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 md:p-0'>{
                    products.slice(0, 8).map((product) => {
                        return (
                            <div key={product._id}>
                                <div className="card bg-base-300 shadow-lg">
                                    <figure className="px-10 pt-10">
                                        <Image
                                            src={product.image}
                                            width={314}
                                            height={208}
                                            alt="Shoes"
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{product.model}</h2>
                                        <p>${product.price}</p>
                                        <div className="card-actions">
                                            <Link href={`/products/${product._id}`} className="btn btn-neutral rounded-lg">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
