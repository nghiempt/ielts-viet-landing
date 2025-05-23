'use client'

import ContactSection01 from "./components/section-01";
import ContactSection03 from "./components/section-03";
import ContactSection02 from "./components/section-02";
import ContactSection04 from "./components/section-04";
import Link from "next/link";

export default function ContactContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full relative bg-[#FDF8F5] min-h-[240px] flex items-center overflow-hidden">
        <div className="absolute left-12 bottom-12 grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-yellow-400 opacity-60" />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
            Liên Hệ
          </h1>
          <nav className="flex justify-center items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Trang Chủ
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">Liên Hệ</span>
          </nav>
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border-4 border-yellow-400 rounded-full opacity-20" />
        </div>
      </div>
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center gap-4 py-8">
        <ContactSection01 />
      </div>
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center gap-4 pt-8 pb-12">
        <ContactSection02 />
      </div>
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center gap-4">
        <ContactSection03 />
      </div>
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center gap-4 pt-20">
        <ContactSection04 />
      </div>
    </main>
  );
}