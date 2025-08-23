import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ProductDetails({ params }) {
    const p = await params;
    const phoneCollection = dbConnect(collectionNamesObj.phoneCollection)
    const data = await phoneCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div className='max-w-7xl mx-auto my-8 p-2'>
            <div className='flex flex-col md:flex-row gap-12'>
                <div className='flex-1'>
                    <Image
                        src={data.image}
                        width={414}
                        height={208}
                        alt="Shoes"
                        className="rounded-xl">
                    </Image>
                </div>
                <div className='flex-2'>
                    <h2 className='text-xl'>Model: {data.model}</h2>
                    <p className='text-lg'>Price: ${data.price}</p>
                    <p className='text-lg'>Select Color : {data.color}</p>
                    <div className='grid grid-cols-3 gap-4 my-4'>
                        <div className='p-2 rounded-xl border bg-base-300'>
                            <p>Screen size</p>
                            <p>{data.screensize}</p>
                        </div>
                        <div className='p-2 rounded-xl border bg-base-300'>
                            <p>CPU</p>
                            <p>{data.CPU}</p>
                        </div>
                        <div className='p-2 rounded-xl border bg-base-300'>
                            <p>Number of cores</p>
                            <p>{data.cores}</p>
                        </div>
                        <div className='p-2 rounded-xl border bg-base-300'>
                            <p>Main Camera</p>
                            <p>{data.main_camera}</p>
                        </div>
                        <div className='p-2 rounded-xl border bg-base-300'>
                            <p>Front-camera</p>
                            <p>{data.front_camera}</p>
                        </div>
                        <div className='p-2 rounded-xl border bg-base-300'>
                            <p>Battery capacity</p>
                            <p>{data.battery}</p>
                        </div>
                    </div>
                    <p>{data.description}</p>
                    <div className='mt-3 flex gap-6 justify-center'>
                        <button className='btn btn-outline md:w-1/2 rounded-xl py-6'>Add to Wishlist</button>
                        <button className='btn btn-neutral md:w-1/2 rounded-xl py-6'>Add to Cart</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
