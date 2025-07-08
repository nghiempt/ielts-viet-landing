"use client";

import {
  Baby,
  Blinds,
  BookOpenCheck,
  Component,
  Earth,
  FolderCode,
  Gem,
  GraduationCap,
  Target,
  TvMinimal,
  BadgePercent,
  Trophy,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundColor: string;
  commission?: string[];
}

const categories: CourseCategory[] = [
  {
    id: "uiux",
    title: "Luyện Thi IELTS Các Cấp Độ Từ FOUNDATION - BAND 7.5",
    description: "Luyện thi IELTS các cấp độ từ FOUNDATION - BAND 7.5",
    icon: (
      <div className="bg-yellow-400 p-4 rounded-full">
        <div className="text-white font-bold">7.5</div>
      </div>
    ),
    backgroundColor: "bg-white",
    commission: [
      "Tặng bộ đề thi thử IELTS mới nhất",
      "Tư vấn lộ trình miễn phí",
    ],
  },
  {
    id: "marketing",
    title: "Luyện Thi Chứng Chỉ Quốc Tế TOEIC",
    description:
      "Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.",
    icon: (
      <div className="bg-emerald-500 p-4 rounded-full">
        <div className="text-white">
          <BookOpenCheck />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    commission: ["Tặng tài liệu TOEIC độc quyền", "Kiểm tra đầu vào miễn phí"],
  },
  {
    id: "development",
    title: "Giao Tiếp Quốc Tế",
    description:
      "Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.",
    icon: (
      <div className="bg-blue-600 p-4 rounded-full">
        <div className="text-white">
          <Earth />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    commission: ["Tặng khoá học phát âm chuẩn quốc tế"],
  },
  {
    id: "improvement",
    title: "Tiếng Anh Bám Sát Chương Trình Phổ Thông",
    description:
      "Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.",
    icon: (
      <div className="bg-pink-500 p-4 rounded-full">
        <div className="text-white">
          <GraduationCap />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    commission: ["Tặng tài liệu học tập", "Kiểm tra trình độ miễn phí"],
  },
  {
    id: "improvement",
    title: "Tiếng Anh Trẻ Em",
    description:
      "Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.",
    icon: (
      <div className="bg-[#006066] p-4 rounded-full">
        <div className="text-white">
          <Baby />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    commission: ["Tặng bộ sách tiếng Anh thiếu nhi", "Tư vấn lộ trình cá nhân"],
  },
  {
    id: "improvement",
    title: "Lớp Đặc Biệt",
    description:
      "Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.",
    icon: (
      <div className="bg-[#801E1E] p-4 rounded-full">
        <div className="text-white">
          <Gem />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    commission: [
      "Ưu đãi học phí",
      "Quà tặng đặc biệt cho học viên đăng ký sớm",
    ],
  },
];


const Section03 = () => {
    const [selectedCategory, setSelectedCategory] =
      useState<CourseCategory | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleCardClick = (category: CourseCategory) => {
      setSelectedCategory(category);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedCategory(null);
    };
  return (
    <div className="max-w-[1138px] mx-auto px-0 lg:px-0">
      <div className="text-center mb-12">
        <div className="relative inline-block mx-5">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Các Khoá Học Tại IELTS VIỆT
          </h2>
        </div>
      </div>
      <div className="relative mx-5 lg:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Dialog key={category?.id}>
              <DialogTrigger asChild>
                <div
                  key={category.id}
                  className={`${category.backgroundColor} rounded-lg p-8 shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-300 cursor-pointer`}
                  onClick={() => handleCardClick(category)}
                >
                  <div className="flex flex-col items-center text-center justify-center gap-4">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[1000px]">
                <DialogHeader>
                  <DialogTitle>Chi Tiết Khoá Học</DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white w-full p-8 relative">
                    <div className="flex flex-col items-center gap-4">
                      {category?.icon}
                      <h2 className="text-2xl font-bold text-center mb-2">
                        {category?.title}
                      </h2>
                      <p className="text-gray-700 text-center mb-2">
                        {category?.description}
                      </p>
                      {category?.commission && (
                        <div className="flex flex-col">
                          {category?.commission.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 rounded px-3 py-2 mt-2"
                            >
                              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))] flex-shrink-0" />
                              <span className="text-sm sm:text-base font-semibold">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Link
                    href="https://www.facebook.com/ielts.viet.2025"
                    target="_blank"
                    className="bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80 px-5 py-3 text-white rounded-lg font-semibold transition-colors duration-300 text-sm"
                  >
                    Đăng ký ngay
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section03;
