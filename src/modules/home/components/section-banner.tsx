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



  const init = async () => {
    try {
      const res = await VideoService.getAll();

      console.log("res", res);

      if (Array.isArray(res) && res.length > 0) {
        const videoData = res.find((item: any) => item.isDisplay === true);
        console.log("videoData", videoData);

        if (videoData) {
          setVideo(videoData.video);
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

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [isLoading]);

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
              Mang Giá Trị IELTS Và Năng Lực Nghe Nói Tiếng Anh Thật Sự
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Tham gia học IELTS cùng đội ngũ giảng viên giàu kinh nghiệm, bạn sẽ
            được hướng dẫn tận tình với phương pháp giảng dạy hiện đại. Trung
            tâm cung cấp môi trường học tập chuyên nghiệp, tài liệu đa dạng và
            sự hỗ trợ chu đáo. Đây là cơ hội để bạn cải thiện kỹ năng tiếng Anh
            và đạt điểm IELTS như mong muốn.
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
              <DialogContent className="">
                <div className="">
                  <video
                    className="h-[400px] w-full rounded-lg"
                    controls
                    autoPlay
                    muted
                  >
                    <source
                      src={video}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/farmcode/image/upload/v1744468567/ielts-viet/IV_banner_f5ywmv.png"
            alt="alt"
            className="w-full h-full object-cover object-right rounded-lg"
            width={1000}
            height={1000}
          />
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
    </section>
  );
};

export default SectionBanner;
