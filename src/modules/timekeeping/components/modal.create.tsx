"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UploadService } from "@/services/upload";
import { Loader, Plus } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "@/styles/hide-scroll.css";
import { TimekeepingService } from "@/services/timekeeping";

export function ModalCreateTeacher() {
  const { toast } = useToast();
  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mainPreview, setMainPreview] = useState<string | null>(null);
  const [name, setName] = useState<string>("");

  const handleMainImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("File quá lớn. Vui lòng chọn file nhỏ hơn 5MB");
      return;
    }
    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file hình ảnh");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setMainPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateMainImage = () => {
    mainImageInputRef.current?.click();
  };

  const validateForm = () => {
    if (!mainPreview) {
      toast({
        variant: "destructive",
        title: "Vui lòng chọn ảnh đại diện.",
      });
      return false;
    }

    if (!name) {
      toast({
        variant: "destructive",
        title: "Vui lòng điền tên giáo viên.",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);

    const uploadMainImage: any = await UploadService.uploadToCloudinary([
      mainPreview,
    ]);

    const body = {
      teacher_name: name,
      teacher_avatar: uploadMainImage[0]?.url || "",
      role: "Giảng viên",
    };
    await TimekeepingService.createTeacher(body);
    setIsLoading(false);

    window.location.href = "/cham-cong";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer py-10">
          <div className="flex">
            <div className="border border-green-500 rounded-full p-5 bg-green-100 text-green-500 cursor-pointer hover:bg-green-200 transition-all duration-300 ease-in-out">
              <Plus size={30} />
            </div>
          </div>
          <div className="text-xl font-bold mt-4">Thêm giáo viên</div>
        </div>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px] max-h-[100vh] overflow-hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>
            <span className="!text-[20px]">Thêm giáo viên mới</span>
          </DialogTitle>
          <DialogDescription>
            <span className="!text-[16px]">
              Điền thông tin giáo viên và nhấn{" "}
              <strong className="text-orange-700">Lưu</strong> để thêm giáo viên
              mới.
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="w-full grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto scroll-bar-style">
          <div className="col-span-1 overflow-hidden">
            <div className="mb-6">
              <Label htmlFor="thumbnail" className="text-right !text-[16px]">
                Ảnh đại diện
              </Label>
              <div className="mt-2">
                {!mainPreview && (
                  <div
                    onClick={handleUpdateMainImage}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-white px-5 py-16 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-700 cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <span>+ Tải hình lên</span>
                      <span className="text-xs text-gray-500">
                        hoặc kéo thả file vào đây
                      </span>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  ref={mainImageInputRef}
                  onChange={handleMainImageChange}
                  accept="image/*"
                  className="hidden"
                />
                {mainPreview && (
                  <div className="mt-2">
                    <Image
                      src={mainPreview}
                      alt="main-preview"
                      className="w-full rounded-md mt-2"
                      width={1000}
                      height={1000}
                    />
                    <div
                      onClick={handleUpdateMainImage}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-white px-5 py-3 mt-5 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-700 cursor-pointer"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500">
                          Thay đổi hình ảnh
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="description" className="text-[16px]">
              Tên giáo viên
            </Label>
            <div className="w-full grid items-center gap-4">
              <textarea
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên giáo viên"
                className="col-span-3 p-2 border rounded"
              ></textarea>
            </div>
          </div>
        </div>
        <DialogFooter className="flex justify-center items-end gap-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="!px-10 !text-[16px]"
            >
              Huỷ
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="!px-10 !text-[16px] bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80"
          >
            Lưu
            {isLoading && <Loader className="animate-spin" size={48} />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
