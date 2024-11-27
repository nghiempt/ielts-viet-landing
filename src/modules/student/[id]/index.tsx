'use client'

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import FB from '../../../../public/images/facebook.png';
import TW from '../../../../public/images/twitter.png';
import B from '../../../../public/images/back.png';
import View from '../../../../public/images/view.png'
import { useEffect, useState, useRef } from "react";
import { DATA } from "@/utils/data";
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import DOMPurify from 'dompurify';

interface Students {
  id: number,
  image: string,
  title: string,
  content: string,
}

const students = DATA.STUDENTS as Students[]

export default function StudentDetailPage() {
  const [student, setStudent] = useState<Students | null>(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (typeof id === "string") {
      const studentData = students.find((stu) => stu.id === parseInt(id, 10));
      setStudent(studentData || null);
    }
  }, [id]);


  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-3/4 pb-10 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>HỌC VIÊN IELTS VIỆT</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-row justify-center items-start w-3/4 rounded-lg">
        <div className="flex flex-col items-end pr-10 gap-4 pt-5 sticky top-60 left-12 min-w-44" >
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <Image src={FB} alt="" className="" width={15} />
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-orange-500 rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">Chia sẻ Facebook</div>
          </div>
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <Image src={TW} alt="" className="" width={15} />
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-orange-500 rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">Chia sẻ Twitter</div>
          </div>
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <Link href={`/hoc-vien`}>
              <Image src={B} alt="" className="" width={15} />
            </Link>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-orange-500 rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">Quay lại</div>
          </div>
        </div>
        <div className="">
          <h2 className="flex justify-center text-4xl font-bold mb-6">{student?.title}</h2>
          <div className="flex flex-row gap-2 mb-6">
            <Image src={View} alt="" width={22} height={12} />
            <p>20 lượt xem</p>
          </div>
          <div className="text-justify" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(student?.content || '') }} />
        </div>
        <div className="min-w-44"></div>
      </div>
      <div className="flex justify-center w-full mt-20" >
        <Image src="https://ktdcgroup.vn/wp-content/uploads/2021/05/PT.jpg" alt="" width={1150} height={1150} />
      </div>
      <div className="w-3/4">
        <div className="flex flex-row justify-center items-end mb-20">
          <div className="w-3/4 mt-20 bg-gray-300 h-px"></div>
          <div className="w-full flex justify-center text-4xl font-bold">Có thể bạn quan tâm</div>
          <div className="w-3/4 mt-20 bg-gray-300 h-px"></div>
        </div>
      </div>
      <div className="grid grid-cols-4 w-3/4 gap-4 mb-20">
        {students.filter((stu) => {
          if (Array.isArray(id)) return false;
          return stu.id !== parseInt(id, 10);
        }).slice(0, 4).map((stu) => (
          <div key={stu.id}>
            <Link href={`/hoc-vien/${stu.id}`}>
              <div className="relative">
                <Image className="rounded-lg cursor-pointer " src={stu.image} alt="" width={1000} height={1000} />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-0 cursor-pointer duration-500 hover:bg-opacity-50"></div>
              </div>
            </Link>
            <Link href={`/hoc-vien/${stu.id}`}>
              <div className="font-bold text-md mt-5 tracking-wide hover:text-orange-500 cursor-pointer">
                {stu.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

