"use client";

import Image from "next/image";
import Section02_1 from "./section-02.1";

const Section02 = () => {
  return (
    <section className="w-full">
      <div className="space-y-12">
        <div className="text-center mx-5">
          <p className="text-[rgb(var(--secondary-rgb))] text-lg font-semibold mb-3">
            Chúng tôi hoàn toàn đảm bảo
          </p>
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-4xl font-bold leading-snug">
              Định Hướng Rõ Ràng – Học Đúng Lộ Trình – Đạt Target IELTS
            </h2>
          </div>
        </div>
        <div className="mx-6 lg:mx-28">
          <p className="text-center">
            Chúng tôi bắt đầu bằng việc đánh giá trình độ tiếng Anh hiện tại của
            bạn, xác định rõ điểm mạnh – điểm yếu. Từ đó xây dựng lộ trình học
            cá nhân hóa, bám sát mục tiêu điểm số. Giảng viên đại học nhiều năm
            kinh nghiệm dạy IELTS và giao tiếp sẽ trực tiếp đồng hành, giúp bạn
            cải thiện toàn diện kỹ năng – đặc biệt là Nghe & Nói. mục tiêu IELTS
            nhanh chóng và hiệu quả!
          </p>
        </div>
        <div className="text-center mx-5">
          <div className="relative inline-block mt-5">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
              Lợi ích khi học tiếng anh tại IELTS VIỆT
            </h2>
          </div>
        </div>
        <div className="hidden lg:flex flex-row justify-around lg:justify-center items-center mx-4 lg:mx-0 gap-3 lg:gap-16">
          <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16">
            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
              <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/17367/17367529.png"
                  alt="alt"
                  className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                  width={400}
                  height={200}
                />
              </div>
              <div className="text-sm text-center">Giao Tiếp Thật Sự</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
              <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/9119/9119230.png"
                  alt="alt"
                  className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105 object-contain"
                  width={400}
                  height={200}
                />
              </div>
              <div className="text-sm text-center">Đạt IELTS mong muốn</div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16">
            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
              <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/3094/3094918.png"
                  alt="alt"
                  className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-contain"
                  width={400}
                  height={200}
                />
              </div>
              <div className="text-sm text-center">Bám Sát Tiến Độ</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
              <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/814/814513.png"
                  alt="alt"
                  className="w-full h-[26px] transform transition-transform duration-500 group-hover:scale-105  object-cover"
                  width={400}
                  height={200}
                />
              </div>
              <div className="text-sm text-center">Cơ Hội Quốc Tế</div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col justify-around lg:justify-center items-start mx-4 lg:mx-0 gap-3 lg:gap-16 pb-4">
          <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16 px-8">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/17367/17367529.png"
                    alt="alt"
                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="text-sm text-center">Đạt IELTS mong muốn</div>
              </div>
              <div className="text-white">empty</div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="text-white">empty</div>
              <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/9119/9119230.png"
                    alt="alt"
                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-contain"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="text-sm text-center">Định Cư Nước Ngoài</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16 px-8">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/3094/3094918.png"
                    alt="alt"
                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-contain"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="text-sm text-center">Bám Sát Tiến Độ</div>
              </div>
              <div className="text-white">empty</div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="text-white">empty</div>
              <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/814/814513.png"
                    alt="alt"
                    className="w-full h-[26px] transform transition-transform duration-500 group-hover:scale-105  object-cover"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="text-sm text-center">Cơ Hội Quốc Tế</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section02_1 />
    </section>
  );
};

export default Section02;
