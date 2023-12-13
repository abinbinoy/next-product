'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavBar from '@/app/components/navbar/NavBar'
import Products from '@/app/components/products/Products'
import axios from 'axios'

const Page = () => {
    type ProductType = {
        brand: string;
        category: string;
        price: number;
        thumbnail: string;
    };

    const [product, setProduct] = useState<{ products: ProductType[] } | undefined>();

    useEffect(() => {
        const productData = async () => {
            try {
                const response = await axios.get<{ products: ProductType[] }>('https://dummyjson.com/products');
                setProduct(response?.data)
            }
            catch (error) {
                return error;
            }
        };
        productData();
    }, [])
    return (
        <>
            {/* navbar */}
            <NavBar />

            {/* cover image and note */}
            <div>

                <div className="flex justify-center items-center bg-indigo-100 p-12 bg-cover bg-fixed bg-[url('https://wallpapercave.com/wp/wp7513030.jpg')] h-[50vh]">
                    <div className="container mx-auto">
                        <div className="text-left  mx-auto">
                            <h1 className="text-3xl md:text-4xl font-serif mb-2">Get the awsome products at<br /> best price.</h1>
                        </div>
                        <div className="mb-3">
                            <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-center">
                                <div className='lg:w-[50%] flex w-full h-[50px]'>
                                    <input
                                        type="search"
                                        className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l  dark:text-black border-solid border-neutral-300 bg-[#ffffff94] bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary w-full text-black"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="button-addon1" />

                                    <button
                                        className="relative z-[2] flex items-center rounded-r bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                        type="button"
                                        id="button-addon1"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* products displayed here */}
                <div className='flex flex-wrap justify-center'>
                    {product ? <Products product={product} /> : <div>Loading...</div>}
                </div>
            </div>
        </>
    )
}

export default Page
