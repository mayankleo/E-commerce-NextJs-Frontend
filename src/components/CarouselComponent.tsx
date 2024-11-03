import { ReactNode } from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type CarouselPropsType = {
    urls: string[];
    fade?: boolean;
    children?: ReactNode;
}

const Carousel = ({ urls, children, fade = false }: CarouselPropsType) => {
    return (
        <div className='rounded-lg overflow-hidden relative select-none w-full h-full'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                className='h-full'
            >
                {urls.map((el, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className={`h-full w-full ${fade && 'filter brightness-75'}`}>
                                <Image
                                    src={el}
                                    alt={"img"} fill={true}
                                    className='rounded-lg object-cover' />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-10'>
                {children}
            </div>
        </div>
    )
}

export default Carousel