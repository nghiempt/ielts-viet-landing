"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DecorBar } from "@/components/using-ui/decor-bar"
import { DATA } from '@/utils/data'
import Image from "next/image"
import img1 from '../../../public/images/teachers/teacher-01.jpg'
import { useState } from "react"
import Pagination from "react-bootstrap/Pagination";
import RealityImage from "../contact/reality-image"
import StudentSlider from "./components/students.slider"
import Link from "next/link";
import DOMPurify from 'dompurify';

interface Students {
    id: number,
    image: string,
    title: string,
    content: string,
}

interface Images {
    id: number,
    original: string,
    thumbnail: string,
    description: string
}

const students = DATA.STUDENTS as Students[]

const images = DATA.REAL_IMAGES as Images[]

export default function StudentPage() {
    const [itemPerPage, setItemPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const totalResult = students.length;
    const totalPages = Math.ceil(totalResult / itemPerPage);

    const pagedResult = students.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };


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
            <div className="w-3/4 mt-5 rounded-md flex justify-center items-center">
                <section className="w-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl">HỌC VIÊN IELTS VIỆT</h1>
                    <DecorBar />
                    <article className="w-4/6 text-wrap text-base font-medium leading-7 text-gray-600">
                        Hơn 15 năm hoạt động, KTDC tự hào là đơn vị đào tạo nên hàng ngàn học viên có thành tích IELTS ấn tượng. Các cựu học viên có điểm số cao (IELTS 8.0+) còn chủ động kết nối thành mạng lưới Alumni năng động, góp phần giúp đỡ học viên hiện tại của trung tâm luyện tập kỹ năng Nghe – Nói. KTDC tin rằng với mỗi hành trình đã đi qua, học viên đều có những câu chuyện truyền cảm hứng của riêng mình. Hãy cùng KTDC khám phá nhé!
                    </article>
                </section>
            </div>
            <div className="w-3/4 mt-10">
                <div className="grid grid-cols-3 gap-7">
                    {pagedResult?.map((stu, index) => (
                        <div key={index} className="group rounded-xl shadow-lg shadow-slate-200 overflow-hidden">
                            <div className="relative overflow-hidden rounded-t-xl">
                                <Link href={`/hoc-vien/${stu?.id}`}>
                                    <Image className="transform transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full" src={stu?.image} alt="" width={1000} height={1000} />
                                </Link>
                            </div>
                            <div className="mx-5 my-5">
                                <Link href={`/hoc-vien/${stu?.id}`}>
                                    <p className="font-bold text-xl mb-3 line-clamp-2 hover:text-orange-500 cursor-pointer">{stu?.title}</p>
                                </Link>
                                <p className="text-justify text-gray-600 line-clamp-3"><div
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(stu?.content || '') }}
                                /></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <Pagination className="flex flex-row gap-4 mt-10">
                        <Pagination.First
                            onClick={goToFirstPage}
                            disabled={currentPage <= 1}
                            className="px-5 py-2 border rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer"
                        />
                        <Pagination.Prev
                            onClick={goToPreviousPage}
                            disabled={currentPage <= 1}
                            className="px-5 py-2 border rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer"
                        />

                        <Pagination.Item
                            className="px-3 py-2 border rounded-lg hover:bg-orange-500 hover:text-white">
                            {currentPage} / {totalPages}
                        </Pagination.Item>

                        <Pagination.Next
                            onClick={goToNextPage}
                            disabled={currentPage >= totalPages}
                            className="px-5 py-2 border rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer"
                        />
                        <Pagination.Last
                            onClick={goToLastPage}
                            disabled={currentPage >= totalPages}
                            className="px-5 py-2 border rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer"
                        />
                    </Pagination>
                </div>
            </div>

            <div className="w-3/4 mt-20 bg-gray-300 h-px"></div>

            <div className="w-3/4 mt-20 rounded-md flex justify-center items-center">
                <section className="w-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl">CẢM NHẬN HỌC VIÊN</h1>
                    <DecorBar />
                </section>
            </div>

            <div className="w-full flex justify-center">
                <StudentSlider />
            </div>

            <div className="bg-cover bg-center h-full w-full flex justify-center items-center py-8"
                style={{ backgroundImage: `url('https://ktdcgroup.vn/wp-content/uploads/2021/10/chuong-trinh-hoc-ielts-ktdc-ielts-6-Copy-min.jpg')` }}>
                <div className="w-3/4 flex justify-center items-center">
                    <div className="w-full justify-self-center">
                        <div className="text-3xl text-orange-500 font-bold py-4">TƯ VẤN LỘ TRÌNH HỌC CÁ NHÂN HÓA</div>
                        <div className="text-base text-white py-4 w-[700px]">Mỗi học viên đều có xuất phát điểm và mục tiêu khác nhau. Để thiết kế lộ trình học cá nhân hóa cho riêng bạn, hãy để lại thông tin ở đây ngay bạn nhé!</div>
                        <div className="py-4">
                            <div className="text-base text-orange-500 font-bold">Hoặc gọi hotline</div>
                            <div className="text-xl text-white font-bold">093 921 77 18</div>
                        </div>
                    </div>
                    <div className="justify-self-center">
                        <div className="">
                            <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ và tên" required />
                        </div>
                        <div className="py-4">
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số điện thoại" required />
                        </div>
                        <div className="">
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                        <button className="w-full mt-8 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Đăng ký tư vấn</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20 w-full">
                <div className="flex flex-col justify-left w-3/4">
                    <h1 className="font-bold text-4xl">Hình ảnh thực tế</h1>
                    <DecorBar />
                    <div>
                        <RealityImage />
                    </div>
                </div>
            </div>

            <div className="w-full bg-orange-50 py-12 px-6 mt-14 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Đăng ký học cùng <span className="text-orange-500">IELTS VIỆT</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float.png" alt="Zalo Logo" className="w-10 h-10" />
                        <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
                            <p className="font-semibold text-gray-800">Nhắn tin Zalo</p>
                            <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-1.png" alt="Messenger Logo" className="w-10 h-10" />
                        <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
                            <p className="font-semibold text-gray-800">Nhắn tin Messenger</p>
                            <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-2.png" alt="Phone Icon" className="w-10 h-10" />
                        <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
                            <p className="font-semibold text-gray-800">Gọi hotline</p>
                            <p className="text-gray-500 text-sm">0939 217 718</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-3.png" alt="Clipboard Icon" className="w-10 h-10" />
                        <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
                            <p className="font-semibold text-gray-800">Đăng ký kiểm tra trình độ</p>
                            <p className="text-orange-500 text-sm">miễn phí</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
