import Image from 'next/image';
import React from 'react'

export default function Hero() {
    return (
        <div className="py-28 bg-white px-6 text-center mt-2">

            <div className='flex gap-12 '>
                <div className="max-w-4xl mx-auto flex-1  ml-20">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Discover the Latest Smartphones in One Place
                    </h1>

                    <p className="text-lg md:text-lg mb-8">
                        From specs to reviews — explore detailed information about every phone.
                        Compare models, check features, and find the perfect device for you.
                    </p>

                    <button className=" btn btn-neutral rounded-xl font-semibold shadow-lg"
                    >
                        Browse Phones
                    </button>
                </div>
                <div className='flex-1 flex justify-center w-full'>
                    <Image src={'/bg1.jpg'} width={400} height={208} alt='Phone'></Image>
                </div>
            </div>
        </div>
    );
}
