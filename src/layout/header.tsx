"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  BookMarked,
  House,
  Info,
  LibraryBig,
  Phone,
  PhoneCall,
} from "lucide-react";
import { IMAGES } from "@/utils/images";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "VỀ CHÚNG TÔI", href: "/ve-chung-toi" },
    { label: "KHOÁ HỌC", href: "/khoa-hoc" },
    { label: "BÀI VIẾT", href: "/bai-viet" },
    { label: "LIÊN HỆ", href: "/lien-he" },
  ];

  return (
    <header className="w-full flex justify-center items-center border-b">
      <div className="w-full lg:w-3/4 px-6 lg:px-0">
        <div className="flex items-center justify-between h-24">
          <div className="flex lg:hidden flex-col justify-center">
            <button
              className="text-gray-500 w-10 h-10 relative focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                    }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                    }`}
                ></span>
              </div>
            </button>
          </div>
          <Link href="/" className="hidden lg:flex items-center gap-2">
            <Image
              src={IMAGES.LOGO}
              alt="alt"
              className="w-full h-12 object-cover"
              width={1000}
              height={0}
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] font-medium transition-colors hover:text-[rgb(var(--secondary-rgb))] ${item.href === pathname
                    ? "text-[rgb(var(--secondary-rgb))]"
                    : "text-gray-500"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => window.open("https://zalo.me/0939217718")}
                className="text-[18px] bg-white border border-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))] rounded-full hover:bg-[rgb(var(--secondary-rgb))] hover:text-white"
              >
                <PhoneCall size={12} />
                0939.217.718
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://ielts-viet-test-module.vercel.app/"
                  )
                }
                className="hidden lg:flex text-[18px] bg-[rgb(var(--secondary-rgb))] text-white rounded-full px-6 hover:opacity-80 hover:bg-[rgb(var(--secondary-rgb))]"
              >
                Test Online
              </Button>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute top-24 left-0 h-[830px] w-full bg-white shadow-md border-t border-gray-200 z-20">
          <ul className="flex flex-col space-y-10 py-10 px-5">
            <li className="font-bold flex flex-row items-center gap-3">
              <House size={20} />
              <a href={`/`} className="text-gray-700 hover:text-black">
                Trang chủ
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <Info size={20} />
              <a
                href={`/ve-chung-toi`}
                className="text-gray-700 hover:text-black"
              >
                Về chúng tôi
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <LibraryBig size={20} />
              <a href={`/khoa-hoc`} className="text-gray-700 hover:text-black">
                Khóa học
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <BookMarked size={20} />
              <a href={`/bai-viet`} className="text-gray-700 hover:text-black">
                Bài Viết
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <Phone size={20} />
              <a href={`/lien-he`} className="text-gray-700 hover:text-black">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
