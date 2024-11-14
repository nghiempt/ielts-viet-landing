"use client"

import { data } from "./data"
import Footer from "@/layout/footer"
import Header from "@/layout/header"

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
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
          <img src="https://res.cloudinary.com/farmcode/image/upload/v1731055890/ielts-viet/solffftvy8bkth7b1vhz.png" alt="alt" className="w-5/6 rounded-lg border-[1.5px] border-orange-500" />
          <img src="https://res.cloudinary.com/farmcode/image/upload/v1730742319/ielts-viet/wcbfgroi7dyfkhyp6ada.png" alt="alt" className="w-5/6 rounded-lg absolute top-6 left-16 border-[1.5px] border-blue-800" />
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
              <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/448624343_122188562204023936_1427625599855996507_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGWgyL0HkvTkE6b6pZ-aiGLAasASobVwvIBqwBKhtXC8sDQqv9e2NyljGq0uvbw75d24nRiqERNrgPmiR8Uj7iX&_nc_ohc=PYWzDGKg5vYQ7kNvgFnTSTk&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYP3H2BIy_xH1xoaMOuQuxk&oh=00_AYAsgHkL_ZV8NJhmSqwbtdJragiIaQkEzPd4Obo68iahfA&oe=672ED482" alt="alt" className="w-[320px] h-[380px] rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">IELTS Foundation</h3>
                <div className="flex justify-start items-center gap-4 my-4">
                  <p className="text-orange-500 font-semibold text-lg">9.488.000 VND</p>
                  <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
                </div>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>✔️ Đầu vào: 3.5 - 4.0 | Đầu ra: 4.5+</li>
                  <li>✔️ Có nền tảng tiếng Anh cơ bản</li>
                  <li>✔️ Chưa tự tin sử dụng tiếng Anh trong môi trường học thuật và giao tiếp</li>
                  <li>✔️ Tăng vốn từ và ngữ pháp, luyện phát âm và phản xạ</li>
                </ul>
                <button className="mt-8 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
              </div>
            </div>
            <div className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
              <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/449304507_122190859112023936_8558148362142286384_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGweVW5C00UPj9PSgB17u3VlnqWcoCIG0yWepZygIgbTJ6GY0ZRzMEgyg-0cy0584ma8B5xgIDNlDOCkbggkfjD&_nc_ohc=WH7TiVPN-BgQ7kNvgHD_l4b&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=AfSMt4yeFCo-no9lSYnUNZz&oh=00_AYDTQeD3ZL5IaYfzQh58renPK6m8YWNGaW7PexewAoI7QA&oe=672EC267" alt="alt" className="w-[320px] h-[380px] rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">IELTS Foundation</h3>
                <div className="flex justify-start items-center gap-4 my-4">
                  <p className="text-orange-500 font-semibold text-lg">9.488.000 VND</p>
                  <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
                </div>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>✔️ Đầu vào: 3.5 - 4.0 | Đầu ra: 4.5+</li>
                  <li>✔️ Có nền tảng tiếng Anh cơ bản</li>
                  <li>✔️ Chưa tự tin sử dụng tiếng Anh trong môi trường học thuật và giao tiếp</li>
                  <li>✔️ Tăng vốn từ và ngữ pháp, luyện phát âm và phản xạ</li>
                </ul>
                <button className="mt-8 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đội Ngũ Chuyên Gia</h2>
          <p className="text-gray-500 mt-4">
            Giảng viên bản ngữ, <span className="text-orange-500">80% là cựu giám khảo IELTS</span>, cùng cố vấn người Việt đạt 8.0+, đem lại phương pháp toàn diện, hiệu quả cho học viên Việt Nam.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mt-10">
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 w-80 relative">
            <img src="https://res.cloudinary.com/farmcode/image/upload/v1730890283/ielts-viet/gkhowebkdnpe6w6xbvgr.png" alt="Andy Robertson" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 text-center">Thầy Trương Hoàng Hậu</h3>
            <ul className="mt-4 text-gray-700 space-y-1 text-center">
              <li>✔️ Chứng chỉ</li>
              <li>✔️ Cử nhân</li>
              <li>✔️ Thạc sĩ</li>
            </ul>
          </div>
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
              Được dẫn dắt bởi các cựu giám khảo IELTS, giảng viên với chứng chỉ CELTA, DELTA và nhiều năm kinh nghiệm, học viên nhận được sự hỗ trợ 1:1 cho Speaking và Writing. Giảng viên điều chỉnh phương pháp giảng dạy phù hợp với từng học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Công nghệ AI tiên tiến</h3>
            <p className="mt-2 text-gray-600">
              Ielts Việt là đơn vị đầu tiên tại Việt Nam ứng dụng AI để luyện tập đủ 4 kỹ năng IELTS. Hệ thống cung cấp phản hồi chi tiết theo tiêu chuẩn IELTS, kết hợp nền tảng LMS hỗ trợ học tập 24/7.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Cam kết kết quả</h3>
            <p className="mt-2 text-gray-600">
              Với 15 năm kinh nghiệm đào tạo, chúng tôi cam kết đầu ra hoặc học lại miễn phí. Học viên được hỗ trợ toàn diện, từ kiến thức đến tâm lý trước kỳ thi.
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
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=HqWIZA6LLPAQ7kNvgGSRFDu&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Am1niY4-gL4yKSHCh_-2MHe&oh=00_AYA5-8x-FEosgxuOjAdrDNxqSp8TpJ_IQE_Zv5P4DeGXng&oe=67312874" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-lg rounded-full px-2 py-2">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Văn A</h3>
              </div>
              <p className="text-gray-600">THPT A</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=HqWIZA6LLPAQ7kNvgGSRFDu&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Am1niY4-gL4yKSHCh_-2MHe&oh=00_AYA5-8x-FEosgxuOjAdrDNxqSp8TpJ_IQE_Zv5P4DeGXng&oe=67312874" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-lg rounded-full px-2 py-2">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Văn A</h3>
              </div>
              <p className="text-gray-600">THPT A</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=HqWIZA6LLPAQ7kNvgGSRFDu&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Am1niY4-gL4yKSHCh_-2MHe&oh=00_AYA5-8x-FEosgxuOjAdrDNxqSp8TpJ_IQE_Zv5P4DeGXng&oe=67312874" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-lg rounded-full px-2 py-2">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Văn A</h3>
              </div>
              <p className="text-gray-600">THPT A</p>
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
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Ngọc Anh</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình chỉ mới bắt đầu học ielts từ hè năm nay, lúc đó kiến thức về tiếng anh của mình chỉ coi là đủ dùng và ở mức 4.5(?). Nhưng sau khi học tại Ielt Việt được 2 tháng và giờ...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Google</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Hồ Nguyên Khang</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Học ở đây vui lắm luôn. Ngày đầu học mình thấy hơi lo lắng tại do học với người bản xứ thì sợ mình không hiểu các thầy nói gì. Nhưng mà sau khi trải nghiệm thì lại thấy nghe...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Google</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Le Nha Thy</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Chương trình học bám sát ielts và cực kỳ hiệu quả, thấy lại chuyên môn cao và cách học giúp học viên luyện tập khả năng chủ động trong học tập...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Google</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Nguyễn Đình Kha</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình đã có trải nghiệm học IELTS tại Ielt Việt vô cùng tuyệt vời. Ngay từ ban đầu, mình đã được đánh giá chi tiết về trình độ và được tư vấn kỹ càng về...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Facebook</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Phương Linh</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình học ở đây mới tháng thứ 3 nhưng mà trình độ đã cải thiện rất nhiều, tăng band chỉ sau 1 khóa học. Cơ sở vật chất tốt, giáo trình được soạn bởi cựu examiner. Giáo viên siêu nhiệt tình...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Facebook</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Lý Vĩnh Quân</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình đã học xong 2 khoá ở Ielt Việt rồi và trường oke cực. Cơ sở vật chất tốt, giáo trình được soạn bởi cựu examiner của British Councils. Giáo viên siêu nhiệt tình...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Facebook</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full" >Xem thêm đánh giá</button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <div className="w-3/4 flex flex-wrap bg-orange-50 rounded-xl overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/06/REGISTRATION-FORM_690X551_Slide-02.png" alt="IELTS consultation" className="w-full h-full object-cover rounded-l-lg" />
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
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Zalo</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-1.png" alt="Messenger Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Messenger</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-2.png" alt="Phone Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Gọi hotline</p>
              <p className="text-gray-500 text-sm">0939 217 718</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-3.png" alt="Clipboard Icon" className="w-10 h-10" />
            <div>
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
