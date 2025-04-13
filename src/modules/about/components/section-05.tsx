"use client";

import { TeacherService } from "@/services/teacher";
import Image from "next/image";
import React, { useEffect } from "react";

interface Teacher {
  _id: string;
  teacher_name: string;
  teacher_avatar: string;
  role: string;
  login_code: string;
  latest_datetime_check_in: string;
  latest_datetime_check_out: string;
  latest_status: string;
  work_status: string;
  show_status: string;
}

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <div className="relative group cursor-pointer">
    <div
      className={`rounded-[40px] p-6 transition-all duration-300 group-hover:-translate-y-2`}
    >
      <div className="aspect-square overflow-hidden mb-4">
        <Image
          src={teacher.teacher_avatar}
          alt={teacher.teacher_name}
          className="w-full h-full object-cover rounded-full border"
          width={1000}
          height={0}
        />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-bold">{teacher.teacher_name}</h3>
        <p className="text-[rgb(var(--secondary-rgb))] font-medium">
          {teacher.role}
        </p>
      </div>
    </div>
  </div>
);

const Section05 = () => {
  const [teacher, setTeacher] = React.useState<Teacher[]>([]);

  const init = async () => {
    try {
      const res = await TeacherService.getAll();

      if (Array.isArray(res) && res.length > 0) {
        setTeacher(res);
      } else {
        setTeacher([]);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setTeacher([]);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="w-full lg:mx-auto">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl font-bold">Đội Ngũ Giảng Viên</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teacher
          .filter(
            (item) =>
              item.work_status === "able" && item.show_status === "activate"
          )
          .map((item) => (
            <TeacherCard key={item?._id} teacher={item} />
          ))}
      </div>
    </div>
  );
};

export default Section05;
