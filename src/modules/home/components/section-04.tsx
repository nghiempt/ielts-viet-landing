"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CourseService } from "@/services/course";
import { HELPER } from "@/utils/helper";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  title: string;
  price: number;
  instructor: {
    name: string;
    avatar: string;
    rating: number;
  };
  studentsCount: number;
  lessonsCount: number;
  image: string;
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
        }`}
    />
  ));
};

const Section04 = () => {

  const [data, setData] = useState<any[]>([] as any);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const init = async () => {
    try {
      const res = await CourseService.getAll();

      if (Array.isArray(res) && res.length > 0) {
        setData(res);
        setIsLoading(false);
      } else {
        setData([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
      setData([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [isLoading]);
  return (
    <section className="w-full">
      <div className="space-y-12">
        <div className="text-center">
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">
              Khoá Học Nổi Bật
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 lg:mx-0">
          {data?.map((course: any, index: number) => (
            <Card
              key={course?._id}
              className="relative overflow-hidden cursor-pointer group hover:opacity-80"
            >
              <CardContent className="p-0">
                <Link href="/khoa-hoc">
                  <div className="relative shadow-inner overflow-hidden group">
                    <Image
                      src={course?.thumbnail}
                      alt={course?.course_name}
                      className="w-full h-56 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={course?.teacher_avatar}
                        alt={course?.teacher_name}
                        className="w-10 h-10 rounded-full border"
                        width={40}
                        height={40}
                      />
                      <div className="flex-1">
                        <p className="font-medium">{course?.teacher_name}</p>
                        <div className="flex items-center gap-1">
                          {renderStars(Math.floor(Math.random() * 2) + 4)}
                          <span>(5)</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg h-14 line-clamp-2">{course?.course_name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span>{course?.students} Students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span>{course?.lessons} Lesson</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/khoa-hoc"
            className="px-1 py-1 bg-[rgb(var(--secondary-rgb))] text-white rounded-full font-medium flex justify-between items-center gap-4 hover:opacity-80 transition-colors"
          >
            <span className="pl-6">Xem tất cả</span>
            <span className="p-3 bg-white rounded-full">
              <ArrowRight color="#000" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section04;
