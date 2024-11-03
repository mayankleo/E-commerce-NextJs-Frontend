import React from 'react';
import Image from "next/image";
import { ButtonComponent } from '../components';
import Link from 'next/link';
import { ItemMinView } from '@/lib/itemType';

type CardProps = {
  item: ItemMinView
}

const Card = ({ item }: CardProps) => {
  return (
    <div className='rounded-lg flex flex-col gap-4 shadow-lg p-4 aspect-square'>
      <Image src={item.item_image_url || "/No_img.png"} alt="img" width={300} height={300} className='aspect-[1.5/1] rounded-lg object-cover w-full' />
      <div className='text-lg flex flex-col gap-2'>
        <div className='bg-gray-100 rounded-lg p-1'>
          <p className='font-medium leading-5 h-6 overflow-hidden text-ellipsis line-clamp-1 mb-1'>{item.item_name}</p>
          <p className='text-neutral-500 text-sm leading-5 h-10 overflow-hidden text-ellipsis line-clamp-2'>{item.item_description}</p>
        </div>
        <p className='font-medium text-lg'>₹{item.item_price}</p>
        {/* <Link href={`/item/${item.id}`}> */}
        <Link href={`products/item/${item.item_slug}`}>
          <ButtonComponent className='w-full'>Buy Now</ButtonComponent>
        </Link>
      </div>
    </div>
  );
};

export default Card;


