"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import "../../../styles/contact.css";
import { DATA } from "@/utils/data";

const images = DATA.REAL_IMAGES;

export default function Section06() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const getFullSlides = (images: any, perSlide = 4) => {
    const result = [];
    const totalImages = images.length;
    let index = 0;
    while (result.length < Math.ceil(totalImages / perSlide)) {
      const slide = [];
      for (let i = 0; i < perSlide; i++) {
        slide.push(images[index % totalImages]);
        index++;
      }
      result.push(slide);
    }
    return result;
  };

  const slides = getFullSlides(images);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isGalleryOpen]);

  const openGallery = (index: number) => {
    setStartIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="max-w-[1138px] flex flex-col items-center justify-between mb-8">
      <div className="text-center mb-10 mt-8">
        <p className="text-[rgb(var(--secondary-rgb))] text-lg font-semibold mb-3">
          Trung Tâm
        </p>
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl font-bold">Hình ảnh thực tế</h2>
        </div>
      </div>
      <div className="w-[89%] lg:w-full">
        {!isGalleryOpen ? (
          <div className="w-full lg:w-full max-w-screen-xl h-full lg:px-0">
            <Swiper
              className="h-[600px] lg:h-[800px]"
              navigation
              pagination={{
                clickable: true,
              }}
              spaceBetween={10}
              slidesPerView={slidesPerView}
              loop={true}
              resistanceRatio={0}
            >
              {slides?.map((slide, slideIndex) => (
                <SwiperSlide key={slideIndex} className="">
                  <div className="grid grid-cols-2 gap-2.5 h-full">
                    {slide.map(
                      (image, index) =>
                        image && (
                          <div
                            key={index}
                            className="relative group cursor-pointer"
                            onClick={() => openGallery(slideIndex * 9 + index)}
                          >
                            <Image
                              alt={`Photo ${image?.id}`}
                              className="w-full h-full rounded-lg shadow-lg brightness-95 transition-transform duration-200 object-cover"
                              src={image?.thumbnail}
                              width={1000}
                              height={1000}
                              sizes="(max-width: 640px) 80vw,
                                   (max-width: 1024px) 50vw,
                                   (max-width: 1280px) 33vw,
                                   25vw"
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                          </div>
                        )
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 bg-[rgb(var(--secondary-rgb))] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[rgb(var(--secondary-rgb))] transition z-50"
              onClick={closeGallery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-[50%] lg:h-[100%] max-w-5xl">
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"></div>
              <div className="relative p-4">
                <ImageGallery
                  items={images?.map((image) => ({
                    original: `${image?.thumbnail}`,
                    thumbnail: image?.thumbnail,
                    description: image?.description,
                  }))}
                  startIndex={startIndex}
                  showFullscreenButton={true}
                  showPlayButton={false}
                  onSlide={(index) => setStartIndex(index)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
