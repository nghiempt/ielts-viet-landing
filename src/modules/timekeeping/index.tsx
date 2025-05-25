/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Image from "next/image";
import Cookies from "js-cookie";
import { LoginModal } from "./login";
import { useCallback, useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HELPER } from "@/utils/helper";
import { API } from "@/utils/api";
import { ModalCreateTeacher } from "./components/modal.create";

export default function TimeKeepingClient() {
  const isTKLogin = Cookies.get("isTKLogin");
  const { toast } = useToast();
  const [teachers, setTeachers] = useState([] as any);
  const [currentTeacher, setCurrentTeacher] = useState(null as any);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckIn = () => {
    const raw = "";
    const requestOptions: any = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };
    fetch(`${API.CHECK_IN_OUT}/${currentTeacher?._id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.data) {
          setCurrentTeacher({
            ...currentTeacher,
            latest_datetime_check_in: new Date().toISOString(),
          });
        } else {
          toast({
            title: "Có lỗi xảy ra",
            variant: "destructive",
            description: "Vui lòng thử lại",
          });
          setIsLoading(false);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleCheckOut = () => {
    const raw = "";
    const requestOptions: any = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };
    fetch(`${API.CHECK_IN_OUT}/${currentTeacher?._id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.data) {
        } else {
          toast({
            title: "Có lỗi xảy ra",
            variant: "destructive",
            description: "Vui lòng thử lại",
          });
          setIsLoading(false);
        }
      })
      .catch((error) => console.error(error));
  };

  const getAllAccount = async () => {
    const requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${API.GET_ALL_TEACHER}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setTeachers(result?.data))
      .catch((error) => console.error(error));
  };

  const handleLogin = async (code: string) => {
    if (!currentTeacher?._id) return;
    setIsLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      login_code: code,
    });
    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${API.TIMEKEEPING_LOGIN}/${currentTeacher._id}`,
        requestOptions
      );
      const result = await response.json();

      if (result?.data) {
        setIsLoading(true);
        setCurrentTeacher({
          ...currentTeacher,
          latest_status: result.data.latest_status,
          latest_datetime_check_in: result.data.latest_datetime_check_in,
        });

        if (result.data.latest_status === "need-check-in") {
          handleCheckIn();
        } else if (result.data.latest_status !== "need-check-in") {
          handleCheckOut();
        }

        if (result.data.latest_status === "need-check-in") {
          toast({
            title: "Check In thành công!",
            description: "Chúc bạn một ngày làm việc hiệu quả!",
            className: "bg-green-500 text-white",
          });
        } else if (result.data.latest_status !== "need-check-in") {
          toast({
            title: "Check Out thành công!",
            description: "Cám ơn bạn một ngày làm việc vất vả!",
            className: "bg-green-500 text-white",
          });
        }

        setTimeout(() => {
          // setIsLoading(false);
          window.location.reload();
        }, 1000);
      } else {
        toast({
          title: "Mã code không hợp lệ!",
          variant: "destructive",
          description: "Vui lòng kiểm tra lại mã code của bạn!",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const init = useCallback(() => {
    getAllAccount();
  }, []);

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full flex flex-col justify-center items-center pt-10 pb-20">
        <div className="w-4/5">
          <h1 className="text-2xl text-center">
            Hãy chọn bản thân để Check-in nhé!
          </h1>
          <div
            className={`grid grid-cols-2 ${
              teachers?.length === 0 ? "lg:grid-cols-1" : "lg:grid-cols-3"
            } gap-10 mt-10`}
          >
            {teachers?.length === 0 ? (
              <div className="w-full h-96 flex justify-center items-center">
                <Loader className="w-6 h-6 ml-2 animate-spin" />
              </div>
            ) : (
              teachers
                ?.filter((teacher: any) => teacher.work_status === "able")
                .map((teacher: any, index: any) => {
                  return (
                    <LoginModal
                      key={index}
                      teacher={teacher}
                      handleLogin={handleLogin}
                      isLoading={isLoading}
                      setCurrentTeacher={setCurrentTeacher}
                    />
                  );
                })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
