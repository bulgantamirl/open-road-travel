import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/landing/grid5.png";
import mapBig from "../../../../public/assets/landing/mapBig.png";
import {useRouter} from "next/router";
import {trips} from "@/utils";
import moon from "../../../../public/assets/moon.svg"
import sun from "../../../../public/assets/sun.svg"
import map from "../../../../public/assets/map-black.svg"
import user from "../../../../public/assets/user-black.svg"
import dollar from "../../../../public/assets/dollar-black.svg"
import home from "../../../../public/assets/home.svg"
import send from "../../../../public/assets/send.svg"
import CardTrip from "@/components/CardTrip";
import cardDef from "../../../../public/assets/landing/tripCardDef.png";
import Footer from "@/components/Footer";

export default function TripSingle() {
    const router = useRouter().query;
    const tripItem = trips.find((item => item.id === router.tripId))
    console.log(router, tripItem)
    return (
        <div className={'w-full'}>
            <Navbar />
            <div className={`w-full  relative bg-black  flex z-0 flex-col`}>
                <Image className={'w-full object-cover h-[400px]'} src={bg} alt={''} />
            </div>
            <div className={`flex w-full max-w-[100vw] relative flex z-0 flex-col`}>
                <section className={'w-full py-[80px] gap-24 flex flex-col lg:flex-row items-center lg:items-start lg:justify-center text-black relative z-1'}>
                    <div className={'max-w-[520px] flex flex-col gap-4 items-start'}>
                        <h2 className={'font-semibold text-5xl'}>
                            {tripItem?.name}
                        </h2>
                        <p className={'text-[#6F6F6F] text-base'}>
                            {tripItem?.desc}
                        </p>
                        <p className={'text-[#273A50] text-base'}>
                            {tripItem?.desc2}
                        </p>
                        <div className={'flex flex-col gap-1'}>
                            <div className={'flex flex-row gap-4 text-black font-semibold'}>
                                <div className={'flex flex-row gap-2'}>
                                    <Image src={moon} alt={''} />
                                    <span className={'text-[#FF9F47]'}>{tripItem?.nights} </span>
                                </div>
                                <div className={'flex flex-row gap-2'}>
                                    <Image src={sun} alt={''} />
                                    <span className={'text-[#FF9F47]'}>{tripItem?.days} </span>
                                </div>
                            </div>
                            <div className={'flex flex-row gap-4 text-black font-semibold'}>
                                <span className={'flex flex-row gap-2'}>
                                    <Image src={map} alt={''} />
                                     Termin:
                                </span>

                                <span className={'text-[#FF9F47]'}>{tripItem?.meeting} </span>
                            </div>
                            <div className={'flex flex-row gap-4 text-black font-semibold'}>
                                <span className={'flex flex-row gap-2'}>
                                    <Image src={user} alt={''} />
                                     Groupenanzahl:
                                </span>

                                <span className={'text-[#FF9F47]'}>{tripItem?.group} </span>
                            </div>
                            <div className={'flex flex-row gap-4 text-black font-semibold'}>
                                <span className={'flex flex-row gap-2'}>
                                    <Image src={dollar} alt={''} />
                                     Reisepreise:
                                </span>

                                <span className={'text-[#FF9F47]'}>{tripItem?.price} </span>
                            </div>
                            <div className={'flex flex-row gap-4 text-black font-semibold'}>
                                <span className={'flex flex-row gap-2'}>
                                    <Image src={home} alt={''} />
                                     Unterkunft:
                                </span>

                                <span className={'text-[#FF9F47]'}>{tripItem?.hotel} </span>
                            </div>
                            <div className={'flex flex-row gap-4 text-black font-semibold'}>
                                <span className={'flex flex-row gap-2'}>
                                    <Image src={send} alt={''} />
                                     Transport:
                                </span>

                                <span className={'text-[#FF9F47]'}>{tripItem?.transport} </span>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-6 text-[#273A50]'}>
                            {
                                tripItem?.paragraph?.map((item,idx)=> {
                                    return (
                                        <p className={'text-base'} key={idx}>
                                            {item}
                                        </p>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className={'max-w-[560px] flex flex-col gap-4 items-start'}>
                        <Image src={tripItem?.mainImg} alt={''} />
                        <div className={'w-full flex flex-col gap-4 mt-8'}>
                            {
                                tripItem?.images.map((img, idx)=> {
                                    return (
                                        <Image key={idx} className={'w-full object-cover'} src={img} alt={''} />
                                        )

                                })
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div className={'mt-[200px] max-w-[1200px] mx-6 lg:mx-auto flex flex-col gap-10 my-[150px] justify-between'}>
                <h3  className={'font-bold text-5xl text-[#FF9F47]'}>
                    Trips
                </h3>
                <div className={'w-full flex flex-row gap-6 flex-wrap '}>
                    {
                        trips?.map((item, idx)=> {
                            return (
                                <CardTrip link={`${item.id}`} text={item?.name} key={idx} src={item?.mainImg} map={`${item.nights}-${item.days}`} members={item?.group} price={item?.price} /> )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}