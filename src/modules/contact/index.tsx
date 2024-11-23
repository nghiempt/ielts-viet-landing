"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RealityImage from "./reality-image";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mb-10">

        <div className="w-full h-[350px] bg-center bg-cover" style={{
          backgroundImage: "url('https://ktdcgroup.vn/wp-content/uploads/2020/10/Lien-he-1-1920x350.jpg')",
        }}>
          <div className="flex flex-col justify-center items-center align-middle text-white h-[350px] gap-8">
            <h1 className="w-4/5 text-6xl font-bold">Liên hệ</h1>
            <div className="w-4/5 font-semibold">Trang chủ &#8226; Liên hệ</div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="font-bold text-4xl">IELTS VIET TRAINING CENTER</h1>
          <div className="w-14 border-b-2 border-orange-500 my-4 rounded"></div>
          <div className="text-slate-500 mt-6 font-medium">Liên hệ IELTS Việt để được tư vấn lộ trình học IELTS phù hợp dành cho bạn.</div>
        </div>

        <div className="flex flex-row justify-center items-center mt-16">
          <div className="flex flex-col justify-center items-center pl-10 pr-10">
            <Image
              src={"https://ktdcgroup.vn/wp-content/uploads/2022/05/icon-call-50x50.jpg"}
              width={50}
              height={50}
              alt="call"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Gọi ngay!</div>
            <div className="text-xl hover:text-orange-300 cursor-pointer">(028) 7309 6990</div>
          </div>
          <div className="flex flex-col justify-center items-center border-l pl-10 pr-10">
            <Image src={"https://ktdcgroup.vn/wp-content/uploads/2022/05/icon-messenger-50x50.jpg"}
              width={50}
              height={50}
              alt="messenger"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Nhắn tin qua Facebook Messenger</div>
            <div className="text-xl hover:text-orange-300 cursor-pointer">m.me/IELTSVIET</div>
          </div>
          <div className="flex flex-col justify-center items-center border-l pl-10 pr-10">
            <Image src={"https://ktdcgroup.vn/wp-content/uploads/2024/07/zalo-icon-50x50.png"}
              width={50}
              height={50}
              alt="zl"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Nhắn tin qua Zalo</div>
            <div className="text-xl hover:text-orange-300 cursor-pointer">m.me/IELTSVIET</div>
          </div>
          <div className="flex flex-col justify-center items-center border-l pl-10 pr-10">
            <Image src={"https://ktdcgroup.vn/wp-content/uploads/2022/05/icon-fb-50x50.jpg"}
              width={50}
              height={50}
              alt="fb"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Fanpage</div>
            <div className="text-xl hover:text-orange-300 cursor-pointer">m.me/IELTSVIET</div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full mt-32">
          <div className="flex flex-row justify-between items-center w-3/4">
            <div>
              <div className="font-bold text-2xl mb-4">ĐỊA CHỈ</div>
              <div>106 Nguyễn Minh Quang, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</div>
            </div>
            <Link href="https://maps.app.goo.gl/epTLBiHeZqaKXBWR9" target="_blank">
              <Button className="rounded-3xl py-6 bg-amber-500	">Xem chỉ đường</Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          <div className="flex justify-between items-center w-3/4">
            <div className="w-full">
              <iframe
                width="100%"
                height="400"
                scrolling="no"
                style={{
                  border: 0,
                }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=106%20Nguy%E1%BB%85n%20Minh%20Quang,%20P.%20An%20Kh%C3%A1nh,%20Q.%20Ninh%20Ki%E1%BB%81u,%20TP.%20C%E1%BA%A7n%20Th%C6%A1+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 w-full">
          <div className="flex flex-col justify-left w-3/4">
            <h1 className="font-bold text-3xl">Hình ảnh thực tế</h1>
            <div className="w-14 border-b-2 border-orange-500 my-4 rounded"></div>
            <div>
              <RealityImage />
            </div>
          </div>
        </div>



      </div>
      <Footer />
    </div>
  );
}
