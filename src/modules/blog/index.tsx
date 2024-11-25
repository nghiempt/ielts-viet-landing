"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { BreadcrumbFormat } from "@/components/using-ui/breadcrumb-format"
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { DATA } from "@/utils/data";

interface Blogs{
    id: number;
    name: string;
    image: string;
    description: string;
    date: string;
    time: string;
}
const blogs = DATA.BLOG_DATA as Blogs[]
export default function BlogPage() {
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 pb-10 pt-6"><BreadcrumbFormat currentPath={currentPath} /></div>
            <div className="w-5/6 flex justify-center items-start py-8">
                <div className="flex flex-col justify-start r w-3/4 px-12">
                    <div className="flex justify-start items-center w-full py-6">
                        <div className="text-3xl font-bold w-3/6">Tất cả bài viết</div>
                        <div className="w-full h-[2px] bg-gray-300 "></div>
                    </div>
                    {blogs.map((blog, index) => (
                        <div className="flex justify-center items-center py-4">
                        <img className="w-2/6 h-[201px] rounded-sm" src={blog.image} />
                        <div className="flex flex-col  px-6">
                            <a className="text-center text-2xl font-bold hover:text-orange-400" href="/">{blog.name}</a>
                            <div className="text-center py-4">{blog.description}</div>
                            <div className="flex items-start gap-4">
                                <div className="flex justify-center items-center"><CalendarDays className="mr-1" /> {blog.date}</div>
                                <div className="flex justify-center items-center"><Clock className="mr-1" /> {blog.time}</div>
                            </div>
                        </div> 
                    </div>
                    ))}
                </div>

                <div className="flex flex-col items-center w-2/6 py-8">
                    <img className="w-full" src="https://ktdcgroup.vn/wp-content/uploads/2021/05/banner-PT.jpg" />
                    <div className="flex justify-around items-center w-full py-4">
                        <div className="w-2/8 rounded-md border-yellow-300 shadow flex flex-col items-center p-3">
                            <img className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" />
                            <div className="font-semibold">29.063+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                        <div className="w-2/8 rounded-md border-yellow-300 shadow flex flex-col items-center p-3">
                            <img className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" />
                            <div className="font-semibold">1.050+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                        <div className="w-2/8 rounded-md border-yellow-300 shadow flex flex-col items-center p-3">
                            <img className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" />
                            <div className="font-semibold">1.374+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
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
