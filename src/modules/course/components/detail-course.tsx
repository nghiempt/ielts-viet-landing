'use client'

import { CircleCheckBig, Trophy } from "lucide-react";
import Image from "next/image";

export default function CourseDetail({ course }: any) {
  return (
    <div className="w-full mx-auto max-h-[80vh] overflow-y-auto">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="bg-[rgb(var(--secondary-rgb))] flex justify-start items-start relative w-full lg:col-span-5 rounded-lg overflow-hidden">
            <Image
              src={course?.thumbnail}
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 lg:space-y-6 lg:col-span-7">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{course?.course_name}</h1>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                  <span className="text-sm sm:text-base font-semibold">Đầu vào: {course?.input_score}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                  <span className="text-sm sm:text-base font-semibold">Đầu ra: {course?.output_score}</span>
                </div>
              </div>
              {course?.commission.map((item: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                  <span className="text-sm sm:text-base font-semibold">{item}</span>
                </div>
              ))}

            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <CircleCheckBig size={16} className="sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base">Thời gian: {course?.study_time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CircleCheckBig size={16} className="sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base">Thời lượng: {course?.duration}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 mt-10">
          <h2 className="text-lg sm:text-xl font-semibold">Mục tiêu khóa học</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {course?.description}
          </p>
        </div>
      </div>
    </div>
  )
}