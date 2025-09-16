"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { VideoService } from "@/services/video";

const SectionBanner = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [video, setVideo] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Array of image sources - you can replace these with different images
  const images = [
    "https://res.cloudinary.com/farmcode/image/upload/v1751446079/iatt/banner-iv_o1wwg7.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1757986527/iatt/ielts-main-1_boy8ep.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1757986552/iatt/ielts-main-2_g6rkdk.png",
    "https://res.cloudinary.com/farmcode/image/upload/v1757986574/iatt/ielts-main-3_b518kc.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1757986592/iatt/ielts-main-4_ac59q1.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1757986609/iatt/ielts-main-5_iwwixs.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1757986623/iatt/ielts-main-6_wrrmrd.jpg",
  ];

  const init = async () => {
    try {
      const res = await VideoService.getAll();

      console.log("res", res);

      if (Array.isArray(res) && res.length > 0) {
        const videoData = res.filter((item: any) => item.isDisplay === true);
        console.log("videoData", videoData);

        if (videoData) {
          setVideo(videoData);
        }
        setIsLoading(false);
      } else {
        setVideo(null);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setIsLoading(false);
    }
  };

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [isLoading]);

  return (
    <section className="w-full flex items-center px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[rgb(var(--secondary-rgb))] text-lg lg:text-xl font-semibold">
              Trung Tâm Anh Ngữ IELTS VIỆT
            </p>
            <h1
              style={{ lineHeight: "1.3" }}
              className="text-3xl lg:text-4xl font-bold text-gray-900"
            >
              Chinh Phục IELTS & Giao Tiếp Tự Tin Cùng Giảng Viên Đại Học Tại
              Cần Thơ
            </h1>
          </div>
          <p className="text-gray-600 text-lg text-justify">
            Học cùng đội ngũ giảng viên đại học giàu kinh nghiệm, chuyên sâu về
            IELTS và giao tiếp, bạn sẽ được truyền đạt kiến thức một cách dễ
            hiểu, sinh động và hiệu quả. Lộ trình học rõ ràng, phương pháp hiện
            đại, giáo trình chuẩn quốc tế – phù hợp cho cả người mất gốc lẫn
            người cần nâng band nhanh. Bắt đầu hành trình chinh phục IELTS và
            tiếng Anh thực chiến ngay hôm nay – cùng những người thầy giỏi nhất
            đồng hành!
          </p>
          <div className="flex items-center gap-4">
            <Button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61550718094576"
                )
              }
              className="text-[16px] rounded-full px-10 bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80 text-white"
            >
              Khám phá ngay
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[16px] rounded-full text-[rgb(var(--secondary-rgb))] flex items-center gap-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span className="hidden lg:flex">Video giới thiệu</span>
                  <span className="flex lg:hidden">Video</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div
                  className={`grid grid-cols-1 ${
                    video?.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"
                  } gap-4`}
                >
                  {video?.map((item: any) => (
                    <video
                      key={item._id}
                      className="h-[400px] w-full rounded-lg"
                      controls
                      autoPlay
                      muted
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
            <Image
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Banner image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover object-right transition-opacity duration-1000 ease-in-out"
              width={1000}
              height={1000}
              style={{
                animation: "fadeIn 2s ease-in-out",
              }}
            />
          </div>
          {/* <div className="bg-[rgb(var(--secondary-rgb))] rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="space-y-6 max-w-md">
                            <div>
                                <h2 className="text-4xl font-bold mb-2">IELTS</h2>
                                <h3 className="text-2xl">Online Admission</h3>
                            </div>
                            <blockquote className="text-white">
                                Sẵn sàng để trở thành học viên của chúng tôi
                            </blockquote>
                            <Button variant="outline" className="text-[rgb(var(--secondary-rgb))] rounded-full px-8 font-semibold border-white hover:bg-white/10 hover:text-white">
                                Đăng ký
                            </Button>
                            <div className="mt-4">
                                <p className="text-white">www.ieltsviet.edu.vn</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex absolute top-4 right-4">
                            <p className="text-lg font-semibold">Power by IELTS VIET</p>
                        </div>
                        <div className="absolute -right-20 bottom-0">
                            <div className="w-80 h-80 bg-white/10 rounded-full"></div>
                        </div>
                    </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default SectionBanner;
