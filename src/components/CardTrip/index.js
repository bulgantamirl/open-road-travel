import Image from "next/image";
import map2 from "../../../public/assets/map2.svg";
import user from "../../../public/assets/user.svg";
import dollar from "../../../public/assets/dollar.svg";
import Link from "next/link";

// import "swiper/css";

export default function CardTrip({src, text, map, days,members, price, link, ...props}) {
    return (
        <>

            <Link href={link} >
                <div className={`flex flex-col rounded-[24px] w-[300px] max-w-[300px] h-[370px] shadow-lg bg-white overflow-hidden border-gray-100 border`} {...props}>
                    <Image className={'w-full h-[200px] object-cover'} src={src} alt={''} />
                    <div className={'flex flex-col h-40 gap-2 justify-between items-start bg-white p-3'}>
                        <h3 className={'lg:text-lg font-bold min-h-[60px]'}>
                            {text}
                        </h3>
                        <div className={'w-full flex flex-col'}>
                            <div className={'text-[#FF9F47] text-base flex gap-1 '}>
                                <Image className={'w-[24px]'} src={map2} alt={""} />
                                <span>
                                {map}
                            </span>
                            </div>
                            <div className={'flex flex-row gap-4 items-center'}>
                                <div className={'flex flex-row gap-2 items-start'}>
                                    <Image className={'w-[21px]'} src={user} alt={''} />
                                    <p className={'text-[#9C9C9C] text-sm'}> {members}</p>
                                </div>
                                <div className={'flex flex-row gap-2 items-start'}>
                                    <Image className={'w-[21px]'} src={dollar} alt={''} />
                                    <p className={'text-[#9C9C9C] text-sm'}> {price}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </>


    );
}
