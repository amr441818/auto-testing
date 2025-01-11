"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "@/assets/img/about/slider1.png"
import s2 from "@/assets/img/about/slider2.png";
import s3 from "@/assets/img/about/slider3.png";
import s4 from "@/assets/img/about/slider4.png";
import s5 from "@/assets/img/about/slider5.png";
import s6 from "@/assets/img/about/slider6.png";
import s7 from "@/assets/img/about/slider7.png";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./aboutUs.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";


export default function AboutCarousal() {
//   const location = useLocation();
  const  t  = useTranslations();

  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="headerCarousal z-0 "
          style={{ zIndex: "0px" }}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center absolute top-0 left-0 z-[999] w-full h-full">
              <div
                className="flex flex-col items-center w-full justify-between gap-[109px]"
                style={{ position: "relative" }}
              >
                
                  <div className="flex flex-col gap-[10px] mt-[12px] md:mt-28">
                    <h1 className="text-white text-[16px] lg:text-[32px] font-[700]">
                      {t("about_page.page_title")}
                    </h1>
                  <ul className=" space-x-0 rtl:space-x-reverse text-[12px]  md:text-[16px] flex justify-center items-center">
                      <li>
                        <span className="text-white">
                          {t(
                            "about_page.breadcrumb.current_page"
                          )}
                        </span>
                      </li>
                      <li className="before:content-['<<'] ltr:before:mr-2 rtl:before:ml-2 text-white text-[16px] font-[400]">
                        <Link
                          href="/profileSettings"
                          className="text-white font-[500] hover:underline mx-2 text-[12px]  md:text-[16px]"
                        >
                          {t("about_page.breadcrumb.home_page")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                
                   
              </div>
            </div>
            <Image src={s1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
