"use client";

import Image from "next/image";

interface Teacher {
  id: string;
  name: string;
  role: string;
  image: string;
  backgroundColor: string;
}

const teachers: Teacher[] = [
  {
    id: "1",
    name: "Thầy Trương Hoàng Hậu",
    role: "Giám Đốc",
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/e9ezv52zjsijpkidifme.jpg",
    backgroundColor: "bg-pink-100",
  },
  {
    id: "1",
    name: "Thầy Huỳnh Vũ Duy",
    role: "Giảng viên",
    image:
      "http://res.cloudinary.com/farmcode/image/upload/v1743341691/ielts-viet/gtlx7xzwggrnq6uk33la_epkgsw.jpg",
    backgroundColor: "bg-pink-100",
  },
  {
    id: "1",
    name: "Cô Thạch Ngọc Trân",
    role: "Giảng viên",
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1737517742/ielts-viet/wzyakd9aahjm9lguisas.jpg",
    backgroundColor: "bg-pink-100",
  },
  {
    id: "1",
    name: "Cô Phạm Thị Ý Duy",
    role: "Giảng viên",
    image:
      "http://res.cloudinary.com/farmcode/image/upload/v1743402113/ielts-viet/wtr2ozwzeq0t25u2sala_siqmfv.jpg",
    backgroundColor: "bg-pink-100",
  },
  {
    id: "1",
    name: "Cô Võ Minh Thư",
    role: "Giảng viên",
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/vstvevvdeyhrk2ng0kun.jpg",
    backgroundColor: "bg-cyan-100",
  },
  {
    id: "courtney",
    name: "Cô Phương Trinh",
    role: "Giảng viên",
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/xwhzeij09ovqumaso6rn.jpg",
    backgroundColor: "bg-sky-100",
  },
];

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <div className="relative group cursor-pointer">
    <div
      className={`rounded-[40px] p-6 transition-all duration-300 group-hover:-translate-y-2`}
    >
      <div className="aspect-square overflow-hidden mb-4">
        <Image
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover rounded-full border"
          width={1000}
          height={0}
        />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-bold">{teacher.name}</h3>
        <p className="text-[rgb(var(--secondary-rgb))] font-medium">
          {teacher.role}
        </p>
      </div>
    </div>
  </div>
);

const Section05 = () => {
  return (
    <div className="w-full lg:mx-auto">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl font-bold">Đội Ngũ Giảng Viên</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Section05;
