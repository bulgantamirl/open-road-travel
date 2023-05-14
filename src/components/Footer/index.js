import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import fb from "../../../public/assets/fb.svg"
import ig from "../../../public/assets/ig.svg"
import telegram from "../../../public/assets/telegram.svg"
import logoBlack from "../../../public/assets/logoBlack.svg"
import {useEffect, useState} from "react";


export default function Footer() {
    const [urlString, setUrlString]= useState('');

    return (
        <div style={{transition: '0.3s ease'}} className={`flex bg-white w-full mt-[60px] bottom-0 left-0 text-white right-0 h-[280px] border-t-2 border-gray-300 py-[40px]  flex-col justify-between px-12 z-10`}>
            <div className={'flex flex-row justify-between items-center'}>
                <Link className={'justify-self-start w-[220px] flex flex-col gap-4'} href={'/'}>
                    <Image src={logoBlack} alt={''} />
                    <p className={'text-xs text-black'}>
                        Design amazing digital experience
                        that create more happy in the world
                    </p>
                </Link>
                <div className={'flex flex-row gap-8 text-black font-semibold text-sm'}>
                    <Link  href={'/trips'}>
                        Trips
                    </Link>
                    <Link href={'/info'}>
                        Info
                    </Link>
                    <Link  href={'/blogs'}>
                        Blogs & Articles
                    </Link>
                    <Link  href={'/aboutUs'}>
                        About us
                    </Link>
                    <Link  href={'/contact'}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className={'border-t-2 border-gray-200 items-center justify-between flex flex-row py-4 text-gray-500'}>
                <p className={'text-xs py-4'}>
                    @2023 Open road travel mongolia, All rights reserved
                </p>
                <div className={' flex flex-row gap-6 items-center'}>
                    <Image src={fb} alt={''} />
                    <Image src={ig} alt={''} />
                    <Image src={telegram} alt={''} />
                </div>
            </div>

        </div>
    );
}
