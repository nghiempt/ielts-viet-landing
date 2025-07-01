'use client'

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#1f1f2e] text-white flex flex-col justify-center items-center px-6 lg:px-0">
            <div className="w-full lg:w-3/4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">IELTS VIET CENTER</span>
                        </div>
                        <p className="text-gray-400">
                            Trung tâm đào tạo tiếng anh từ cơ bản đến nâng cao. Dẫn dắt bởi các chuyên gia hàng đầu và đảm bảo đầu ra. Độ tuổi từ tiểu học, trung học, phổ thông, đại học và thạc sĩ.
                        </p>
                        <div className="flex gap-4">
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61550718094576" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61550718094576" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61550718094576" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61550718094576" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className='lg:pl-16'>
                        <h3 className="text-xl font-semibold mb-6">Truy Cập Nhanh</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Trang Chủ</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Về Chúng Tôi</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Các Khoá Học Nổi Bật</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tin Tức Về Tips Học IELTS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Liên Hệ</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} />
                                <span>thayhauieltsct@gmail.com</span>
                            </li>
                            <li className="flex flex-col gap-2 text-gray-400">
                                <div className="flex items-center gap-3">
                                    <Phone size={20} />
                                    <span>0939.217.718</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>Cơ sở 1: 106 Nguyễn Minh Quang, P. Tân An, TP. Cần Thơ</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>Cơ sở 2: 172C Nguyễn Tri Phương, P. Tân An, TP. Cần Thơ</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-gray-800 flex justify-center items-center">
                <div className="w-full lg:w-3/4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">© 2025 IELTS VIET. All rights reserved.</p>
                        <div className="hidden lg:flex gap-6 text-center">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Điều khoản sử dụng</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;