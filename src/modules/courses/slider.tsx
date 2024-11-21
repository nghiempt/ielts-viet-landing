"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teacherData } from "./teacherData";

const TeacherSlider = () => {
  // Function to chunk data into groups of a specified size (3 cards per slide)
  const chunkData = (data, size) => {
    const chunks = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(teacherData, 3);

  return (
    <section className="w-full">
      <div className="h-full mt-20">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          className="w-full"
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide
              key={`slide-${slideIndex}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 px-14 py-20">
                {slide.map((teach) => (
                  <div
                    key={teach.id}
                    className="bg-white rounded-lg shadow-lg p-6 w-80"
                  >
                    <img
                      src={teach.img}
                      alt={teach.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                      {teach.name}
                    </h3>
                    <ul className="mt-4 text-gray-700 space-y-1 text-center text-base">
                      {teach.qualifications.map((qual, index) => (
                        <li key={index}>✔️ {qual}</li>
                      ))}
                    </ul>
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

export default TeacherSlider;
