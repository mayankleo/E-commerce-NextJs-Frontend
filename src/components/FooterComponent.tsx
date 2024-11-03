import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto px-2 select-none flex flex-col gap-6 mb-12 mt-20'>
                <hr className='border' />
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <h2 className='text-2xl font-semibold'>OBuy</h2>
                        <div>
                            <h5 className='my-2'>Follow us on</h5>
                            <div className='flex items-center gap-4 mb-4'>
                                <Link href={'https://www.facebook.com'}><FontAwesomeIcon icon={faFacebook} className='size-7' /></Link>
                                <Link href={'https://x.com'}><FontAwesomeIcon icon={faXTwitter} className='size-7' /></Link>
                                <Link href={'https://www.instagram.com'}><FontAwesomeIcon icon={faInstagram} className='size-7' /></Link>
                                <Link href={'https://www.telegram.org'}><FontAwesomeIcon icon={faTelegram} className='size-7' /></Link>
                            </div>
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