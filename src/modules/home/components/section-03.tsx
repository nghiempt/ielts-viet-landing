'use client'

import { Baby, Blinds, BookOpenCheck, Component, Earth, FolderCode, Gem, GraduationCap, Target, TvMinimal } from "lucide-react";

interface CourseCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    backgroundColor: string;
}

const categories: CourseCategory[] = [
    {
        id: 'uiux',
        title: 'Luyện Thi IELTS Các Cấp Độ Từ FOUNDATION - BAND 7.5',
        description: 'Luyện thi IELTS các cấp độ từ FOUNDATION - BAND 7.5',
        icon: (
            <div className="bg-yellow-400 p-4 rounded-full">
                <div className="text-white font-bold">7.5</div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'marketing',
        title: 'Luyện Thi Chứng Chỉ Quốc Tế TOEIC',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-emerald-500 p-4 rounded-full">
                <div className="text-white"><BookOpenCheck /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'development',
        title: 'Giao Tiếp Quốc Tế',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-blue-600 p-4 rounded-full">
                <div className="text-white"><Earth /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Tiếng Anh Bám Sát Chương Trình Phổ Thông',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-pink-500 p-4 rounded-full">
                <div className="text-white"><GraduationCap /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Tiếng Anh Trẻ Em',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-[#006066] p-4 rounded-full">
                <div className="text-white"><Baby /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Lớp Đặc Biệt',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-[#801E1E] p-4 rounded-full">
                <div className="text-white"><Gem /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    }
];

const Section03 = () => {
    return (
        <div className="w-full lg:w-3/4 px-6 lg:px-0 pb-20 pt-12">
            <div className="text-center mb-12">
                <div className="text-center">
                    <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
                        Các Khoá Học Tại IELTS VIỆT
                    </h2>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.backgroundColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                            <div className="flex flex-col items-center text-center justify-center gap-4">
                                {category.icon}
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section03;