import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg"
import {useEffect, useState} from "react";


export default function Navbar() {

    const [scrolling, setScrolling]= useState(false);
    const changeAppbar = () => {
        if(window.scrollY >= 60) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeAppbar);
    }, []);

    return (
        <div style={{transition: '0.3s ease'}} className={`flex w-full max-w-[100vw] fixed top-0 left-0 text-white right-0 ${scrolling ? 'bg-black h-[70px]': 'bg-transparent h-[80px]'}  flex-row justify-between px-12 items-center z-10`}>
            <Link className={'justify-self-start'} href={'/'}>
                <Image className={'w-[150px]'} src={logo} alt={""} />
            </Link>
            <div className={`flex flex-row gap-8 'text-white' text-sm`}>
                <Link  href={'/trips'}>
                    Trips
                </Link>
                <Link  href={'/info'}>
                    Info
                </Link>
                <Link  href={'/'}>
                    Blogs & Articles
                </Link>
                <Link  href={'/'}>
                    About us
                </Link>
                <Link  href={'/contact'}>
                    Contact
                </Link>
            </div>
            <div className={'flex flex-row gap-4 text-white items-center'}>
                language
                <div style={{boxShadow: '0px 4px 4px 0px #00000040'}} className={'cursor-pointer rounded-[16px] px-4 py-1 bg-white text-black'}>
                    GR
                </div>
            </div>
        </div>
    );
}
