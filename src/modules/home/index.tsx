"use client"

import Image from "next/image"
import { data } from "./data"
import TeacherSlider from "./teacherSlider"
import LearnerSlider from "./learnerCommentSlider"

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-3/4 flex items-center justify-between py-4">
        <a href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image src="/favicon.ico" alt="alt" width={48} height={48} />
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-gray-800">IELTS VIỆT</span>
            <span className="text-sm font-medium text-orange-500">English Center</span>
          </div>
        </a>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
            <span className="text-gray-700 font-light">Hotline:</span>
            <span className="font-semibold text-gray-800">093 921 77 18</span>
          </div>
          <a href="/" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full">Đặt lịch hẹn</a>
          <div className="flex items-center space-x-2">
            <Image src="https://cdn-icons-png.flaticon.com/128/197/197473.png" alt="alt" width={20} height={20} />
            <span className="text-gray-700 font-semibold">VI</span>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-center items-center border-b border-t border-gray-200 bg-white py-4">
        <ul className="flex justify-center items-center gap-20">
          <li>
            <a href="#" className="font-bold text-orange-500">TRANG CHỦ</a>
          </li>
          <li>
            <a href="/khoa-hoc" className="text-gray-800 hover:text-orange-500">KHOÁ HỌC</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">GIẢNG VIÊN</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">HỌC VIÊN</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">LIÊN HỆ</a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 flex justify-center items-center py-8 gap-8">
        <div className="w-1/2 flex flex-col justify-center items-start gap-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Học <span className="text-orange-500">IELTS</span> cùng các chuyên gia đầu ngành
          </h2>
          <ul className="text-gray-700">
            <li>✔️ Phương pháp độc quyền, tiết kiệm 40% thời gian</li>
            <li>✔️ 80% giảng viên là cựu giám khảo IELTS</li>
            <li>✔️ Hệ thống AI độc quyền 4 kỹ năng</li>
            <li>✔️ Hỗ trợ toàn diện từ giáo viên bản ngữ</li>
            <li>✔️ Cam kết đầu ra – 15 năm uy tín</li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full">
              Test trình độ IELTS miễn phí
            </button>
            <button className="border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-full">
              Xem lịch khai giảng
            </button>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/hero-image.png" alt="alt" className="w-28 rounded-full" />
            <span className="text-gray-700 font-semibold">500+ học viên tại Cần Thơ</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="https://ktdcgroup.vn/wp-content/uploads/2024/06/british-council-logo.png" alt="alt" className="w-20" />
              <img src="https://ktdcgroup.vn/wp-content/uploads/2024/05/logo-idp.svg" alt="alt" className="w-20" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-orange-100 p-2 rounded-full">
                <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/google-icon.png" alt="alt" className="w-6 h-6" />
              </div>
              <div className="flex items-center bg-orange-100 p-2 rounded-full">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="alt" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-start relative">
          {/* <img src="https://res.cloudinary.com/farmcode/image/upload/v1731055890/ielts-viet/solffftvy8bkth7b1vhz.png" alt="alt" className="w-5/6 rounded-lg border-[1.5px] border-orange-500" /> */}
          <img src="https://res.cloudinary.com/farmcode/image/upload/v1730742319/ielts-viet/wcbfgroi7dyfkhyp6ada.png" alt="alt" className="w-5/6 rounded-lg top-6 left-16 " />
        </div>
      </div>
      <div className="w-full bg-orange-100 py-8 my-10 overflow-hidden">
        <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
          {data.map((item, index) => (
            <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
              <h3 className="text-orange-500 font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Lộ trình học IELTS</h2>
          <p className="text-gray-500 mt-6 mb-2">
            Được giám khảo chấm thi IELTS xây dựng, đảm bảo tính chính xác, trọng tâm và bám sát với kỳ thi IELTS thực tế
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tất cả</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 4.5+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 5.0+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 5.5+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 6.5+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 7.5+</button>
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <div className="w-3/4 grid grid-cols-2 justify-center items-center gap-6">
            <div className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
              <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/449119200_122189638346023936_6551073348505590426_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHZMmif2qtj3Ra370VhK429mUdAunPVox2ZR0C6c9WjHanwTSxRDo1d1hh91xcjWA20Truwrx48ZbwCBsPUIX1D&_nc_ohc=52jNGgEIB-wQ7kNvgHyZqHu&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A30d-raQheoSQqZj1ssYmdZ&oh=00_AYCq5ZCMQDsbZABRUY10LdUfduCYRkEKgvQ4v4u4bnHiJA&oe=6745CF48" alt="IELTS Junior" className="w-[320px] h-[380px] rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">IELTS Junior</h3>
                <div className="flex justify-start items-center gap-2 my-4">
                  <p className="text-orange-500 font-semibold text-lg">6.288.000 VND</p>
                  <p className="text-gray-500 text-sm">24 giờ (6 tuần)</p>
                </div>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>✔️ Đầu vào: A2 | Đầu ra: B1+</li>
                  <li>✔️ Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi</li>
                  <li>✔️ Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp</li>
                  <li>✔️ Học phương pháp làm bài thi IELTS từng bước</li>
                </ul>
                <button className="mt-8 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
              </div>
            </div>
            <div className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
              <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/441305340_122179098392023936_4070585415963112049_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGmpj4r2j-DgGS0jL_bjG-A0uM_zHoShb_S4z_MehKFv8N39qJnAPgUlycsZNV-WTxRBk9gqijmaEs9HF0LINs-&_nc_ohc=LA7pQ2lgAoEQ7kNvgFujTWh&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AaAWyhA-t-mjSlCbzgMCH80&oh=00_AYDegDv7O0s4Ix4znr7G6WVMFaw4ii2TVLmAI1w_d8g5Jw&oe=6745C5D8" alt="IELTS Advanced" className="w-[320px] h-[380px] rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">IELTS Advanced</h3>
                <div className="flex justify-start items-center gap-2 my-4">
                  <p className="text-orange-500 font-semibold text-lg">9.588.000 VND</p>
                  <p className="text-gray-500 text-sm">40 giờ (10 tuần)</p>
                </div>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>✔️ Đầu vào: 5.0 - 5.5 | Đầu ra: 6.5+</li>
                  <li>✔️ Tập trung vào chiến thuật làm bài và các kỹ năng nâng cao</li>
                  <li>✔️ Đào sâu ngữ pháp và từ vựng học thuật</li>
                  <li>✔️ Luyện nói với các chủ đề thực tiễn</li>
                </ul>
                <button className="mt-8 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 pb-20 flex justify-center items-center flex-col">
        <div className="text-center mb-8 w-3/4">
          <h2 className="text-3xl font-bold text-gray-800">Đội Ngũ Chuyên Gia</h2>
          <p className="text-gray-500 mt-4">
            Đội ngũ gồm giảng viên bản ngữ giàu kinh nghiệm và cố vấn người Việt đạt IELTS 8.0+, hiểu rõ nhu cầu học viên Việt Nam. Chúng tôi áp dụng phương pháp giảng dạy toàn diện, kết hợp lý thuyết với thực hành hiệu quả. Phương châm Học để thành thạo, không chỉ để đạt điểm giúp học viên tự tin sử dụng tiếng Anh trong mọi tình huống.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <TeacherSlider />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đặc quyền của học viên Ielts Việt</h2>
        </div>
        <div className="w-3/4 grid grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Phương pháp Total Immersion</h3>
            <p className="mt-2 text-gray-600">
              Chúng tôi tạo môi trường học tập 100% tiếng Anh với phương pháp độc quyền, giúp học viên tiến bộ nhanh hơn 40% so với cách học truyền thống. Không chỉ hướng đến điểm số, chúng tôi tập trung vào khả năng ứng dụng kiến thức thực tế của học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Đội ngũ giảng viên đầu ngành</h3>
            <p className="mt-2 text-gray-600">
              Được dẫn dắt bởi các cựu giám khảo IELTS, giảng viên với chứng chỉ CELTA, DELTA và nhiều năm kinh nghiệm, học viên nhận được sự hỗ trợ 1:1 cho Speaking và Writing. Mỗi giảng viên đều tận tâm điều chỉnh phương pháp giảng dạy phù hợp nhất với phong cách và nhu cầu học tập của từng học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Công nghệ AI tiên tiến</h3>
            <p className="mt-2 text-gray-600">
              Ielts Việt là đơn vị đầu tiên tại Việt Nam ứng dụng AI để luyện tập đủ 4 kỹ năng IELTS. Hệ thống này cung cấp phản hồi chi tiết theo tiêu chuẩn IELTS, đồng thời nền tảng LMS hỗ trợ học viên luyện tập không giới hạn, mọi lúc, mọi nơi, đảm bảo lộ trình học tập tối ưu và hiệu quả.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Cam kết kết quả</h3>
            <p className="mt-2 text-gray-600">
              Với 15 năm kinh nghiệm đào tạo, chúng tôi cam kết đầu ra hoặc học lại miễn phí. Học viên còn nhận được sự hỗ trợ toàn diện về kiến thức, tâm lý và các kỹ năng cần thiết để sẵn sàng cho kỳ thi, mang đến sự an tâm tuyệt đối trên hành trình chinh phục IELTS.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Cộng đồng Ielt Việt</h2>
          <p className="text-gray-500 mt-4">
            Ielt Việt tin rằng với mỗi hành trình đã đi qua, học viên đều có những câu chuyện truyền cảm hứng của riêng mình.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=jBFmClVlH60Q7kNvgHgPQpC&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A2ix8xDro6WPEyl7oEVgzj-&oh=00_AYCW5xYmtKb5lTYdHnJySwJVmwULz_MIR5kIljZvdZjKgA&oe=6745CFF4" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-2xl rounded-full px-2 py-2">8.0</span>
                <h3 className="ml-4 font-bold text-gray-800">Phạm Phương Linh</h3>
              </div>
              <p className="text-gray-600">Trường THPT Châu Văn Liêm</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=jBFmClVlH60Q7kNvgHgPQpC&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A2ix8xDro6WPEyl7oEVgzj-&oh=00_AYCW5xYmtKb5lTYdHnJySwJVmwULz_MIR5kIljZvdZjKgA&oe=6745CFF4" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-2xl rounded-full px-2 py-2">7.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Nhật Nam</h3>
              </div>
              <p className="text-gray-600">Trường THPT Nguyễn Việt Dũng</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=jBFmClVlH60Q7kNvgHgPQpC&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A2ix8xDro6WPEyl7oEVgzj-&oh=00_AYCW5xYmtKb5lTYdHnJySwJVmwULz_MIR5kIljZvdZjKgA&oe=6745CFF4" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-2xl rounded-full px-2 py-2">6.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Đặng Thanh Tân</h3>
              </div>
              <p className="text-gray-600">Trường THPT Vĩnh Thạnh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Học viên nói gì về Ielt Việt</h2>
          <p className="text-gray-500 mt-2">
            Những chia sẻ từ học viên trong suốt 4 năm qua
          </p>
        </div>
        <div className="w-4/5 flex justify-center gap-6">
          <LearnerSlider />
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full" >Xem thêm đánh giá</button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <div className="w-3/4 flex flex-wrap bg-orange-50 rounded-xl overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/450668484_122193529334023936_1712936787192780696_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFw7gWSyhQf10gubITwNTnn6jwLss66BnLqPAuyzroGcpUMA_3ZRPzSXP0p8m7WlUYl0Sjkvld2XLnGtQDTOKnU&_nc_ohc=y4UUSI2z1H4Q7kNvgHMq6uP&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A2jvxKeplKKXaOEHOGvwW9n&oh=00_AYDjdOcxamfD4JjAXPy3o4PwA5L7j_-ekcJaPTS1zFuPHQ&oe=6745F144" alt="IELTS consultation" className="w-full h-full object-cover rounded-l-lg" />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Miễn phí suất thi thử IELTS</h2>
            <h3 className="text-lg font-semibold text-orange-500">Được cựu giám khảo IELTS nhận xét</h3>
            <p className="text-gray-600 mt-2">
              Trải nghiệm bài thi thử IELTS 4 kỹ năng, mô phỏng thi thật, giúp đánh giá chính xác trình độ IELTS hiện tại.
            </p>
            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label className="sr-only">Họ và tên</label>
                <input type="text" id="name" name="name" placeholder="Họ và tên" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="sr-only">Số điện thoại</label>
                <input type="text" id="phone" name="phone" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Đăng ký tư vấn</button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Bảng Tin Ielt Việt</h2>
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">Were Hiring</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-800">IELTS TEACHER (Vietnamese)</h3>
              <hr className="w-full border-gray-300 my-2" />
              <p className="text-gray-600 text-sm">Recruitment: IELTS TEACHER (Vietnamese)</p>
              <p className="text-gray-500 text-xs mt-2">30/10/2024 • 4 phút đọc</p>
            </div>
            <a href="#" className="text-orange-500 text-sm font-semibold p-6 block">Xem thêm tin khác</a>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/08/Thi-IELTS-tren-may-hay-tren-giay-KTDC.jpg" alt="Thi IELTS trên máy hay trên giấy?" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Thi IELTS trên máy hay trên giấy? Đâu là hình thức phù hợp?</h3>
              <p className="text-gray-500 text-xs mt-2">19/10/2024 • 4 phút đọc</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/11/huong-dan-cach-viet-thu-xin-viec-bang-tieng-Anh.jpg" alt="Lịch thi IELTS 2025 tại IDP" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Lịch Thi IELTS 2025: Thông Tin Mới Nhất Và Cách Đăng Ký tại IDP</h3>
              <p className="text-gray-500 text-xs mt-2">12/10/2024 • 4 phút đọc</p>
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
      <footer className="w-full flex flex-col justify-center items-center">
        <div className="w-3/4 grid grid-cols-2 gap-20">
          <div>
            <Image src="/favicon.ico" alt="alt" width={60} height={60} />
            <p className="text-lg font-bold text-orange-500 py-2">IELTS VIỆT</p>
            <p className="text-gray-600">
              Thông qua IELTS, khai phá tiềm năng người học - Kiến tạo cộng đồng người Việt trẻ biết học hỏi tự chủ.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-md justify-start items-center">
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Học tại IELTS VIỆT</h3>
              <ul className="space-y-1">
                <li><a href="#">Đăng ký học</a></li>
                <li><a href="#">Lịch khai giảng</a></li>
                <li><a href="#">Cảm nhận học viên</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Về IELTS VIỆT</h3>
              <ul className="space-y-1">
                <li><a href="#">Giới thiệu IELTS VIỆT</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Tuyển dụng</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Tài liệu IELTS</h3>
              <ul className="space-y-1">
                <li><a href="#">Thi thử IELTS</a></li>
                <li><a href="#">Sự Kiện IELTS</a></li>
                <li><a href="#">Thư Viện IELTS</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/4  box-border grid grid-cols-3 gap-4 text-sm text-gray-300 my-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 013.515 6.343L12 12l8.485 8.485a8 8 0 01-2.828 2.828z" />
              </svg>
              <p className="font-semibold">Cơ sở 1:</p>
            </div>
            <p className="text-orange-500">Khu dân cư Thới Nhựt</p>
            <p>106 Nguyễn Minh Quang, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 013.515 6.343L12 12l8.485 8.485a8 8 0 01-2.828 2.828z" />
              </svg>
              <p className="font-semibold">Cơ sở 2:</p>
            </div>
            <p className="text-orange-500">Khu dân cư Thới Nhựt</p>
            <p>172c Nguyễn Tri Phương, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 013.515 6.343L12 12l8.485 8.485a8 8 0 01-2.828 2.828z" />
              </svg>
              <p className="font-semibold">Liên hệ:</p>
            </div>
            <p className="text-orange-500">Hotline</p>
            <p>0939 217 718</p>
          </div>
        </div>
        <div className="w-full bg-gray-800 py-4 flex justify-center items-center">
          <div className="w-3/4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Ielts Việt</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Kết nối với chúng tôi</span>
              <span className="border-l border-gray-600 h-4 mx-2"></span>
              <img className="cursor-pointer w-4 h-4" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')} src="https://ktdcgroup.vn/wp-content/uploads/2024/10/google-icon.png" alt="alt" />
              <img className="cursor-pointer w-4 h-4" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')} src="https://ktdcgroup.vn/wp-content/uploads/2024/10/facebook-icon.png" alt="alt" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
