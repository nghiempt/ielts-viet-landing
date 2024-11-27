"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import Image from "next/image";
import pb from '../../../../public/images/play.png'

interface Students {
  id: number,
  image: string,
  title: string,
  URL: string
}

const students = DATA.STUDENTS_FEELING as Students[];

const StudentSlider = () => {

  const chunkData = (data: Students[], size: number): Students[][] => {
    const chunks: Students[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(students, 1);

  return (
    <section className="w-4/5 mb-20">
      <div className="h-full mt-2">
        <Swiper
          navigation
          pagination={{
            type: "bullets", clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={1}
          className="w-full h-[340px]"
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide
              key={`slide-${slideIndex}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 py-10">
                {slide.map((stu) => (
                  <div
                    key={stu.id}
                    className="bg-white w-80 overflow-hidden "
                  >
                    <div className="relative">
                      <Image
                        src={stu.image}
                        alt={stu.title}
                        className="w-full object-cover rounded-xl"
                        width={1000}
                        height={1000}
                      />
                      <a href={stu.URL} target="_blank">
                        <div className="rounded-xl absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-25 cursor-pointer duration-500 hover:bg-opacity-75">
                          <div className="absolute rounded-full shadow-md z-10">
                            <svg className="w-10 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
                              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                            </svg>

                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href={stu.URL} target="_blank">
                        <h3 className="text-lg font-semibold text-gray-800 text-center cursor-pointer hover:text-orange-500">
                          {stu.title}
                        </h3>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentSlider;
