import Link from 'next/link'
import React from 'react'
import { RiInstagramLine, RiFacebookCircleFill, RiTwitterXLine, } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto px-2 select-none flex flex-col gap-6 mb-12 mt-20'>
                <hr className='border' />
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <h2 className='text-2xl font-semibold'>OBuy</h2>
                        <div className='flex items-center gap-4'>
                            <Link href={'https://x.com'}><RiTwitterXLine className='size-8' /></Link>
                            <Link href={'https://www.facebook.com'}><RiFacebookCircleFill className='size-8' /></Link>
                            <Link href={'https://www.instagram.com'}><RiInstagramLine className='size-8' /></Link>
                            <Link href={'https://www.telegram.org'}><FaTelegram className='size-8' /></Link>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 gap-32'>
                        <div className=' flex flex-col gap-4'>
                            <h3 className='font-medium'>Topic</h3>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h3 className='font-medium'>Topic</h3>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h3 className='font-medium'>Topic</h3>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                            <Link className='text-gray-800' href={'#'}>Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer