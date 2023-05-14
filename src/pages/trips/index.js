import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import { useRouter } from 'next/router';
import cardDef from "../../../public/assets/landing/tripCardDef.png";
import Button from "@/components/Button";
import Link from "next/link";
import { tripsEn, tripsGr } from '../../utils/index'
import CardTrip from "@/components/CardTrip";
import Footer from "@/components/Footer";
export default function Trips() {
    const { locale } = useRouter();
    const isEng = locale === 'en';
    const trips = isEng ? tripsEn : tripsGr;
  return (
      <>
        <Navbar />
        <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
        <div className={`flex w-full max-w-[100vw] relative z-0 flex-col`}>
          <section className={'w-full py-[100px] gap-24 flex flex-row items-center justify-center text-black relative z-1'}>
              {
                  trips?.map((item, idx)=> {
                      return (
                          <CardTrip link={`/trips/${item.id}`} text={item?.name} key={idx} src={item?.mainImg} map={`${item.nights}-${item.days}`} members={item?.group} price={item?.price} /> )
                  })
              }
          </section>
        </div>
          <Footer />
      </>
  );
}
