"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teacherData } from "./teacherData";
import '../../styles/sliderButton.css'

type Teacher = {
  id: number;
  name: string;
  img: string;
  qualifications: string[];
};

const TeacherSlider = () => {
  // function to chunk data into groups of a specified size (3 cards per slide)
  const chunkData = (data: Teacher[], size: number): Teacher[][] => {
    const chunks: Teacher[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(teacherData, 3);

  return (
    <section className="w-4/5">
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
                {slide.map((teach) => (
                  <div
                    key={teach.id}
                    className="bg-white rounded-lg shadow-xl p-6 w-80 h-96"
                  >
                    <img
                      src={teach.img}
                      alt={teach.name}
                      className="w-40 h-w-40 rounded-full mx-auto mb-7"
                    />
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                      {teach.name}
                    </h3>
                    <ul className="mt-4 text-gray-700 space-y-1 text-center text-base">
                      {teach.qualifications.map((qual, index) => {
                        // Define images based on index
                        const imagesByIndex = [
                          "check.png",
                          "degree.png",
                          "graduate-hat.png",
                        ];
                        const imgSrc = imagesByIndex[index] || "default.png";

                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center space-x-2 pb-2"
                          >
                            <img
                              src={`/images/${imgSrc}`}
                              alt={`Qualification ${index + 1}`}
                              className="w-6 h-6"
                            />
                            <span>{qual}</span>
                          </li>
                        );
                      })}
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
