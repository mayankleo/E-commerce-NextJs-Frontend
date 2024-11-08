import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { ButtonComponent } from '../components';
import { TbLogin2 } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center container mx-auto py-8 px-2 select-none'>
                <div>
                    <Link href={"/"} className='flex justify-between items-center'>
                        <Image src={"/logo.png"} alt={"Logo"} width={48} height={48} className='aspect-[1/1] rounded-lg' priority/>
                    </Link>
                </div>
                <div className='flex gap-12 items-center'>
                    <Link href={"/products/item"}>Items</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/orders/cart"}>Cart</Link>
                    <Link href={"/users/login"}><ButtonComponent className='flex items-center'>Login<TbLogin2 className='size-6 ms-2' /></ButtonComponent></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar