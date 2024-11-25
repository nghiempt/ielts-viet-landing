"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { BreadcrumbFormat } from "@/components/using-ui/breadcrumb-format"
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { DATA } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function BlogDetailPage() {
    const [currentData, setCurrentData] = useState<Blogs | null>(null);

    interface Blogs {
        id: number;
        name: string;
        image: string;
        description: string;
        content: string;
        date: string;
        time: string;
    }
    const Blogs = DATA.BLOG_DATA as Blogs[]
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const fetchData = async () => {
            let id = 0;
            const regex = /\/bang-tin\/(\d+)/;
            const match = currentPath.match(regex);
            if (match && match[1]) {
                id = parseInt(match[1], 10);
                Blogs?.forEach((blog: Blogs) => {
                    //console.log(blog?.id)
                    if (blog?.id === id) {
                        setCurrentData(blog);
                    }
                });
            }
        };

        fetchData();
    }, [currentPath]);
    console.log(currentData)
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-5/6 flex justify-center items-start py-8">
                <div className="flex flex-col items-start border-t-2 border-b-2 gap-4 py-6  sticky top-12 l left-12">
                    <div className="text-sm text-gray-700">Chia sẻ</div>
                    <a href="#" className=" text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">f</a>
                    <a href="#" className="text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">x</a>
                    <a href="#" className="text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">🔗</a>
                </div>
                <div className="flex flex-col justify-start r w-3/4 px-12 ">
                    <div className="w-7/8 flex justify-between items-center py-4">
                        <BreadcrumbFormat currentPath={currentPath} />
                        <div className="flex items-center "><CalendarDays className="mr-1" /> {currentData?.date}</div>
                    </div>
                    <div className="border-b-2">
                        <div className="text-4xl font-bold py-4">{currentData?.name}</div>
                        <div className="text-base py-4">{currentData?.content}</div>
                    </div>
                    <div></div>


                </div>

                <div className="flex flex-col items-center w-2/6 py-6">
                    <img className="w-full" src="https://ktdcgroup.vn/wp-content/uploads/2021/05/banner-PT.jpg" />
                    <div className="flex flex-col w-full py-6 sticky top-12">
                        <div className="text-xl font-bold py-4">Có thể bạn quan tâm</div>
                        {Blogs.map((blog, index) => (
                            blog.id === currentData?.id ?
                                <></>
                                :
                                <Link href={`/bang-tin/${blog.id}`}>
                                    <div className="flex justify-center items-center py-2">
                                        <img className="w-[200px] h-[65px] rounded-md" src={blog.image} />
                                        <div className="px-4 text-base font-bold">{blog.name}</div>
                                    </div>
                                </Link>
                        ))}
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
