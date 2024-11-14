"use client"

import Footer from "@/layout/footer"
import Header from "@/layout/header"

export default function CoursePage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <div className="w-3/4 h-[500px] mb-10 mt-4 rounded-xl text-black text-2xl font-bold flex flex-col justify-center items-center">
                CoursePage
            </div>
            <Footer />
        </div>
    )
}
