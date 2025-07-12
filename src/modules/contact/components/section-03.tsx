import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ReviewService } from "@/services/review";
import { Loader } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection03 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;
    if (!name.trim()) {
      toast({
        variant: "destructive",
        title: "Vui lòng chọn hình ảnh.",
      });
      return false;
    }
    if (name.length < 2) {
      toast({
        variant: "destructive",
        title: "Tên phải có ít nhất 2 ký tự.",
      });
      return false;
    }

    if (!email.trim()) {
      toast({
        variant: "destructive",
        title: "Email là bắt buộc.",
      });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        variant: "destructive",
        title: "Vui lòng nhập email hợp lệ.",
      });
      return false;
    }

    if (!phone.trim()) {
      toast({
        variant: "destructive",
        title: "Số điện thoại là bắt buộc.",
      });
      return false;
    }
    if (!/^\+?\d{9,12}$/.test(phone.replace(/\s/g, ""))) {
      toast({
        variant: "destructive",
        title: "Số điện thoại không hợp lệ.",
        description: "Số điện thoại phải có từ 9 đến 12 chữ số.",
      });
      return false;
    }

    if (!subject) {
      toast({
        variant: "destructive",
        title: "Vui lòng chọn ngành nghề.",
      });
      return false;
    }

    if (!message.trim()) {
      toast({
        variant: "destructive",
        title: "Nội dung câu hỏi là bắt buộc.",
      });
      return false;
    }
    if (message.length < 10) {
      toast({
        variant: "destructive",
        title: "Nội dung phải có ít nhất 10 ký tự.",
      });
      return false;
    }

    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSending(true);
    try {

      const formDataSerialized = {
        user_name: formData.name,
        user_email: formData.email,
        phone: formData.phone.replace(/\s/g, ""),
        profession: formData.subject === "student"
          ? "Học sinh"
          : formData.subject === "student-college"
          ? "Sinh viên"
          : formData.subject === "teacher"
          ? "Giáo viên"
          : formData.subject === "employee"
          ? "Người đi làm"
          : "Không xác định",
        question: formData.message,
      };

      const response = await ReviewService.sendEmailQA(formDataSerialized);

      if (response) {
        toast({
          title: "Gửi thành công!",
          description: "Chúng tôi sẽ liên hệ với bạn sớm.",
          className: "bg-green-500 text-white border border-green-500",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Gửi Email thất bại!",
          description:
            "Đã xảy ra lỗi trong quá trình gửi email, vui lòng thử lại.",
          className: "bg-red-500 text-white border border-red-500",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSending(false);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Lỗi!",
        description: "Không thể gửi biểu mẫu. Vui lòng thử lại.",
      });
    } finally {
      setIsSubmitting(false);
      setIsSending(false);
    }
  };

  return (
    <div className="w-full px-5 lg:px-0 mx-auto bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tên *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số điện thoại *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent"
            />
          </div>
          <div>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent text-black"
            >
              <option value="">Ngành nghề</option>
              <option value="student">Học sinh</option>
              <option value="student-college">Sinh viên</option>
              <option value="teacher">Giáo viên</option>
              <option value="employee">Người đi làm</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nội dung câu hỏi *"
            rows={6}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent resize-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-[rgb(var(--secondary-rgb))] text-white font-medium rounded-md hover:opacity-80 transition-colors duration-300"
            disabled={isSending}
          >
            {isSending ? (
              <div className="flex items-center justify-center cursor-not-allowed">
                <Loader size={16} className="mr-2 animate-spin" /> Đang gửi...
              </div>
            ) : (
              <>Get In Touch</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection03;
