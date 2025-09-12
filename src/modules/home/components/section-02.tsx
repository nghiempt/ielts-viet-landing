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
              Kết Quả IELTS Và Kỹ Năng Nghe Nói Của Bạn
            </h2>
          </div>
        </div>
        <div className="mx-6 lg:mx-28">
          <p className="text-center">
            Chúng tôi luôn bắt đầu bằng việc đánh giá và xác định rõ ràng nền
            tảng tiếng Anh hiện tại của bạn để hiểu rõ điểm mạnh cũng như những
            kỹ năng cần cải thiện. Dựa trên kết quả này, chúng tôi sẽ thiết kế
            lộ trình học tập phù hợp, bám sát mục tiêu cụ thể mà bạn đặt ra.
            Trong suốt quá trình, đội ngũ giảng viên và nhân viên hỗ trợ sẽ đồng
            hành cùng bạn, giúp bạn từng bước tiến gần hơn đến target mong muốn.
            Chúng tôi tin rằng với sự nỗ lực và phương pháp học tập đúng đắn,
            bạn sẽ đạt được thành công như kỳ vọng.
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
