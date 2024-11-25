"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { BreadcrumbFormat } from "@/components/using-ui/breadcrumb-format"
import { useEffect, useState } from "react";
import { DATA } from '@/utils/data'
import Image from "next/image";
import DetailTeacher from "./detail-teacher";

const teacher = DATA.TEACHERS_DATA

export default function TeacherPage() {

    const [currentPath, setCurrentPath] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const openPopup = (teacher: any) => {
        setSelectedTeacher(teacher);
    }

    const closePopup = () => {
        setSelectedTeacher(null);
    }

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    useEffect(() => {
        if (selectedTeacher) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedTeacher]);

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 pb-10 pt-4"><BreadcrumbFormat currentPath={currentPath} /></div>
            <div className="w-3/4 mt-7 rounded-md flex justify-center">
                <section className="w-full flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-5">Đội ngũ giảng viên</h1>
                    <article className="w-4/6 text-center text-base text-gray-600">
                        Ielts Việt tự hào với <strong>100% giảng viên bản ngữ</strong>, trong đó <strong>80% là cựu giám khảo IELTS</strong> được đào tạo chuyên nghiệp bởi Hội Đồng Anh, kết hợp với các cố vấn học tập người <strong>Việt đạt 8.0+ IELTS</strong>. Bạn sẽ được học với giảng viên bản ngữ mà không sợ rào cản ngôn ngữ, và được các cố vấn học tập hỗ trợ trong và ngoài lớp để đạt band điểm mong muốn.
                    </article>
                </section>
            </div>
            <div className="w-3/4 mt-10">
                <div className="grid grid-cols-3 gap-7">
                    {teacher.map((tc, index) => (
                        <div
                            key={index}
                            className="relative shadow-inner overflow-hidden group rounded-lg cursor-pointer"
                            onClick={() => openPopup(tc)}
                        >
                            <Image className="rounded-lg transform transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full" src={`/images/teachers/${tc.image}`} alt="" width={1000} height={1000} />
                            <div className="absolute bottom-10 left-10 text-white z-10">
                                <p>Giảng viên</p>
                                <p className="text-xl font-bold">{tc.name}</p>
                            </div>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-zinc-700 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            <DetailTeacher teacher={selectedTeacher} onClose={closePopup} />

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
