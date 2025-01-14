"use client"

import Image from "next/image"
import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { DATA } from "@/utils/data";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import SignWithIELTS from "@/layout/sign-with-ielts";

interface Blog {
    id: number;
    name: string;
    image: string;
    description: string;
    content: string;
    date: string;
    time: string;
}

const blogs = DATA.BLOG_DATA as Blog[]
const routes = ROUTES

export default function BlogDetailPage() {

    const [currentData, setCurrentData] = useState<Blog | null>(null);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const fetchData = async () => {
            let id = 0;
            const regex = /\/bang-tin\/(\d+)/;
            const match = currentPath.match(regex);
            if (match && match[1]) {
                id = parseInt(match[1], 10);
                blogs?.forEach((blog: Blog, index: number) => {
                    if (blog?.id === id) {
                        setCurrentData(blog);
                    }
                });
            }
        };
        fetchData();
    }, [currentPath]);

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 flex justify-center items-start py-3">
                <div className="flex flex-col items-start border-t-2 border-b-2 gap-4 py-6  sticky top-12 l left-12">
                    <div className="text-sm text-gray-700">Chia sẻ</div>
                    <a href="#" className=" text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">f</a>
                    <a href="#" className="text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">x</a>
                    <a href="#" className="text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">🔗</a>
                </div>
                <div className="flex flex-col justify-start r w-3/4 px-12 ">
                    <div className="w-7/8 flex justify-between items-center py-4">
                        <div className="flex items-center "><CalendarDays className="mr-1" /> {currentData?.date}</div>
                    </div>
                    <div className="border-b-2">
                        <div className="text-4xl font-bold py-4">{currentData?.name}</div>
                        <div className="text-base py-4">{currentData?.content}</div>
                    </div>
                    <div></div>
                </div>
                <div className="flex flex-col items-center w-2/6 py-6">
                    <Image
                        className="w-full"
                        src="https://cdn-icons-png.flaticon.com/128/6499/6499530.png" alt={""}
                        width={1000}
                        height={1000}
                    />
                    <div className="flex flex-col w-full py-6 sticky top-12">
                        <div className="text-xl font-bold py-4">Có thể bạn quan tâm</div>
                        {blogs?.slice(0, 5)?.map((blog: Blog, index: number) => (
                            blog?.id === currentData?.id ?
                                <></>
                                :
                                <Link key={index} href={`${routes.BLOG}/${blog?.id}`}>
                                    <div className="grid grid-cols-12 h-24 items-center py-2 mb-5">
                                        <div className="col-span-4 ">
                                            <Image className="rounded-md" src={blog?.image} alt={""} width={1000} height={1000} />
                                        </div>
                                        <div className="col-span-8 pl-4 text-sm font-bold">{blog?.name}</div>
                                    </div>
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
            <SignWithIELTS />
            <Footer />
        </div>
    )
}