"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { imageData } from "./imageData";

export default function Home() {
    // Ensure we have enough images to fill each slide with 8 images
    const getFullSlides = (images, perSlide = 8) => {
        const result = [];
        const totalImages = images.length;
        let index = 0;

        while (result.length < Math.ceil(totalImages / perSlide) * perSlide) {
            const slide = [];
            for (let i = 0; i < perSlide; i++) {
                slide.push(images[index % totalImages]);
                index++;
            }
            result.push(slide);
        }

        return result;
    };

    const slides = getFullSlides(imageData);

    // Settings for react-slick
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        draggable: true, // Enable dragging with the cursor
        swipeToSlide: true, // Allow swipe gestures
        autoplay: true, // Auto-scroll slides
        autoplaySpeed: 3000, // Time between auto-scrolls
        pauseOnHover: true, // Pause auto-scroll on hover
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <h1 className="text-4xl font-bold mb-12">Draggable Slider Gallery</h1>
            <div className="w-full max-w-screen-xl">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div className="grid grid-cols-4 gap-4">
                                {slide.map((img) => (
                                    <div
                                        key={img.id}
                                        className="w-full h-auto p-2 flex justify-center items-center"
                                    >
                                        <Image
                                            alt={`Photo ${img.id}`}
                                            className="rounded-lg shadow-lg brightness-95 hover:brightness-105 hover:scale-105 transition-transform duration-200"
                                            src={`/images/${img.imgUrl}`}
                                            width={150}
                                            height={150}
                                            sizes="(max-width: 640px) 100vw,
                                                   (max-width: 1024px) 50vw,
                                                   (max-width: 1280px) 33vw,
                                                   25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
}
