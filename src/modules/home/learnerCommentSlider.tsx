"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { learnerData } from "./learnerCommentData";
import '../../styles/sliderButton.css'

type Learner = {
  id: number,
  name: string,
  cmt: string,
  cmtSrc: string
}

const LearnerSlider = () => {
  // function to chunk data into groups of a specified size (3 cards per slide)
  const chunkData = (data: Learner[], size: number): Learner[][] => {
    const chunks: Learner[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(learnerData, 3);



  return (
    <section className="w-full">
      <div className="h-full mt-2">
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
              <div className="flex flex-row justify-around gap-6 px-14 py-10">
                {slide.map((learn) => (
                  <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative h-[250px]" key={learn.id}>
                    <div className="flex items-center space-x-2 mb-4">
                      <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
                      <h3 className="font-bold text-gray-800">{learn.name}</h3>
                      <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
                    </div>
                    <div className="flex flex-col justify-between h-[150px]">
                      <p className="text-gray-600 text-sm">
                        {learn.cmt}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-1 text-gray-500">
                          <span className="text-xs">{learn.cmtSrc}</span>
                        </div>
                        <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
                      </div>
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

export default LearnerSlider;
