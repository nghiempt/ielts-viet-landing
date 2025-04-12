"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../../../styles/contact.css";
import React, { useEffect } from "react";
import { ReviewService } from "@/services/review";

interface Testimonial {
  _id: string;
  name: string;
  school: string;
  rating: number;
  comment: string;
  avatar: string;
  overall: number;
  created_at: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))]"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-gray-600">({rating})</span>
    </div>
  );
};

const Section05 = () => {
  const [data, setData] = React.useState<Testimonial[]>([]);

  const init = async () => {
    try {
      const res = await ReviewService.getAll();

      if (Array.isArray(res) && res.length > 0) {
        setData(res);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <section className="w-full px-6 lg:px-0 pb-12 pt-12">
      <div className="text-center mb-12">
        <div className="text-center space-y-1">
          <p className="text-[#eee] text-md lg:text-lg font-semibold mb-3">
            Thành Tựu Nổi Bật
          </p>
          <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
            Học Viên Nói Gì Về IETLS VIET
          </h2>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.85,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active bg-white",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full lg:w-[74%] h-96"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div
              className={`w-full md:w-1/2 lg:w-[100%] flex flex-row justify-around items-center transform transition-transform duration-300 ease-in-out`}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div key={index} className="flex items-center gap-4 mb-4">
                  <Image
                    src={item?.avatar}
                    alt={item?.name}
                    className="w-16 h-16 rounded-full object-cover"
                    width={1000}
                    height={1000}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{item?.name}</h3>
                    <p className="text-gray-600 text-sm">{item?.school}</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-5 items-center">
                  <StarRating rating={item?.rating} />
                  <div className="text-gray-600 flex items-center">
                    Overall:{" "}
                    <span className="font-bold text-xl ml-2 text-[rgb(var(--secondary-rgb))]">
                      {item?.overall}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{item?.comment}</p>
                <div className="hidden lg:flex absolute top-4 right-4 text-[rgb(var(--secondary-rgb))] text-4xl font-serif opacity-25">
                  <Quote size={40} />
                </div>
                <div className="flex lg:hidden absolute top-4 right-4 text-[rgb(var(--secondary-rgb))] text-4xl font-serif opacity-25">
                  <Quote size={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section05;
