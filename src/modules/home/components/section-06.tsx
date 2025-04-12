"use client";

import {
  BookHeadphones,
  BookMarked,
  CircleUser,
  Component,
  FolderCode,
  GraduationCap,
  Target,
  TvMinimal,
} from "lucide-react";
import Section06Popup from "./section-06-popup";

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundColor: string;
  thumbail: string;
  imageList: string[];
}

const categories: CourseCategory[] = [
  {
    id: "uiux",
    title: "Phòng Riêng Biệt",
    description:
      "Không gian học tập riêng biệt dành cho việc ôn luyện IELTS, giúp bạn tập trung và nâng cao từng kỹ năng một cách hiệu quả.",
    icon: (
      <div className="bg-yellow-400 p-4 rounded-full">
        <div className="text-white font-bold">
          <Component />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
    ],
  },
  {
    id: "marketing",
    title: "Đầy Đủ Thiết Bị Dạy Và Học",
    description:
      "Chúng tôi cung cấp cho bạn các trang thiết bị cần thiết cho việc học và phát triển.",
    icon: (
      <div className="bg-emerald-500 p-4 rounded-full">
        <div className="text-white">
          <TvMinimal />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
    ],
  },
  {
    id: "development",
    title: "Tài Liệu Nước Ngoài",
    description:
      "Tổng hợp các tài liệu, sách và nguồn tham khảo từ nước ngoài phục vụ học tập, nghiên cứu và phát triển kiến thức chuyên sâu.",
    icon: (
      <div className="bg-blue-600 p-4 rounded-full">
        <div className="text-white">
          <FolderCode />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg",
    ],
  },
  {
    id: "improvement",
    title: "Online Linh Hoạt",
    description:
      "Chủ động học tập mọi lúc, mọi nơi với các khóa học online được thiết kế linh hoạt, phù hợp với lịch trình cá nhân.",
    icon: (
      <div className="bg-pink-500 p-4 rounded-full">
        <div className="text-white">
          <Target />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png",
    ],
  },
  {
    id: "i7",
    title: "Góc Tự Học IELTS",
    description:
      "Không gian lý tưởng để bạn luyện tập và nâng cao kỹ năng IELTS một cách chủ động và hiệu quả.",
    icon: (
      <div className="bg-[#0A3D62] p-4 rounded-full">
        <div className="text-white">
          <GraduationCap />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
    ],
  },
  {
    id: "i8",
    title: "Tặng Tài Khoản Tự Luyện IELTS",
    description:
      "Nhận ngay tài khoản luyện thi IELTS online, giúp bạn rèn luyện kỹ năng mỗi ngày một cách dễ dàng và hiệu quả.",
    icon: (
      <div className="bg-[#868E26] p-4 rounded-full">
        <div className="text-white">
          <CircleUser />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
      "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
    ],
  },
  {
    id: "i9",
    title: "Thực Hành Nghe Nói Liên Tục",
    description:
      "Luyện tập kỹ năng Nghe và Nói mỗi ngày để nâng cao phản xạ tiếng Anh một cách tự nhiên và hiệu quả.",
    icon: (
      <div className="bg-[#EDD2B5] p-4 rounded-full">
        <div className="text-white">
          <BookHeadphones />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
    ],
  },
  {
    id: "i10",
    title: "Phòng Đọc IELTS",
    description:
      "Không gian lý tưởng để bạn luyện tập và cải thiện kỹ năng đọc IELTS với tài liệu phong phú, giúp nâng cao điểm số nhanh chóng.",
    icon: (
      <div className="bg-[#333333] p-4 rounded-full">
        <div className="text-white">
          <BookMarked />
        </div>
      </div>
    ),
    backgroundColor: "bg-white",
    thumbail:
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
    imageList: [
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
      "https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg",
    ],
  },
];

const Section06 = () => {
  return (
    <div className="w-full px-4 lg:px-0">
      <div className="text-center mb-12">
        <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
          Không Gian Học Tập
        </p>
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Cơ Sở Vật Chất Hiện Đại
          </h2>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col justify-between rounded-lg`}
            >
              <Section06Popup
                backgroundColor={category?.backgroundColor}
                title={category?.title}
                thumbnail={category?.thumbail}
                description={category?.description}
                imageList={category?.imageList}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section06;
