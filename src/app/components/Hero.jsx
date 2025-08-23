import Image from 'next/image';
import React from 'react'

export default function Hero() {
    return (
        <div className="pb-8 md:py-28 bg-white md:px-6 text-center mt-2">

            <div className='flex flex-col-reverse lg:flex-row gap-2 md:gap-12 '>
                <div className="max-w-lg md:max-w-4xl mx-auto flex-1  md:ml-20">
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
