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
  const [isLogin, setIsLogin] = useState(!!isTKLogin);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("vi-VN", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const [workingTime, setWorkingTime] = useState(
    HELPER.calculateWorkingTime(new Date().toISOString())
  );

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
          setIsLoading(false);
          setIsCheckIn(true);
          setCurrentTeacher({
            ...currentTeacher,
            latest_datetime_check_in: new Date().toISOString(),
          });
          toast({
            title: "Bạn đã check-in thành công!",
            description:
              "Chúc bạn một ngày làm việc hiệu quả! Hãy quay lại check-in sau khi xong việc nhé.",
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
          setIsLoading(false);
          setIsCheckIn(false);
          toast({
            title: "Bạn đã check-out thành công!",
            description:
              "Chúc bạn một ngày làm việc hiệu quả! Đang chuyển hướng về trang chủ...",
          });

          Cookies.remove("isTKLogin");
          setIsCheckingOut(true);
          window.location.href = "/cham-cong";
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

  const setTeacherFromCookie = useCallback(() => {
    if (isTKLogin && teachers.length > 0) {
      const teacherFromCookie = teachers.find(
        (teacher: any) => teacher._id === isTKLogin
      );
      if (teacherFromCookie) {
        setCurrentTeacher(teacherFromCookie);
        setIsCheckIn(teacherFromCookie.latest_status !== "need-check-in");
      }
    }
  }, [isTKLogin, teachers]);

  const handleLogin = async (code: string) => {
    if (!currentTeacher?._id) return;
    setIsCheckingOut(false);
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
        Cookies.set("isTKLogin", currentTeacher._id, { expires: 7 });
        setIsLogin(true);
        setIsCheckIn(result.data.latest_status !== "need-check-in");
        setCurrentTeacher({
          ...currentTeacher,
          latest_status: result.data.latest_status,
          latest_datetime_check_in: result.data.latest_datetime_check_in,
        });

        setIsLoading(false);
        toast({
          title: "Đăng nhập thành công!",
          description: "Chúc bạn một ngày làm việc hiệu quả!",
        });
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

  useEffect(() => {
    setTeacherFromCookie();
  }, [setTeacherFromCookie]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("vi-VN", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      if (isCheckIn && currentTeacher?.latest_datetime_check_in) {
        setWorkingTime(
          HELPER.calculateWorkingTime(currentTeacher.latest_datetime_check_in)
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [
    isCheckIn,
    currentTeacher?.latest_datetime_check_in,
    setTeacherFromCookie,
  ]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full flex flex-col justify-center items-center pt-10 pb-20">
        {!isLogin && (
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
              <div>
                <ModalCreateTeacher />
              </div>
            </div>
          </div>
        )}
        {isLogin && !isCheckIn && !isCheckingOut && (
          <div className="w-3/4 flex flex-col lg:flex-row justify-center items-center gap-10 lg:mt-10">
            <div className="border border-green-500 p-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
              <Image
                src={currentTeacher?.teacher_avatar}
                alt="alt"
                className="w-20 h-20 object-cover rounded-full border"
                width={1000}
                height={0}
              />
              <div className="text-center space-y-1 mt-4">
                <h3 className="text-xl font-bold">
                  {currentTeacher?.teacher_name}
                </h3>
                <p className="text-[rgb(var(--secondary-rgb))] font-medium">
                  {HELPER.renderStatusTimeKeeping(
                    currentTeacher?.latest_status || "need-check-in"
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h1 className="text-xl text-center">
                Click vào nút bên dưới để Check-in vào ca làm việc nhé!
              </h1>
              <div className="flex justify-center items-center">
                <div
                  onClick={handleCheckIn}
                  className="w-28 h-28 rounded-full border border-dashed border-green-500 text-green-500 hover:border-2 hover:font-extrabold flex justify-center items-center cursor-pointer"
                >
                  {isLoading ? (
                    <Loader className="w-6 h-6 ml-2 animate-spin" />
                  ) : (
                    "Check-in"
                  )}
                </div>
              </div>
              <h1 className="text-xl text-center">
                Thời gian bạn Check-in là: <strong>{currentTime}</strong>
                <br />
                Hãy quay lại Check-out sau khi xong việc nhé!
              </h1>
            </div>
          </div>
        )}
        {isLogin && isCheckIn && (
          <div className="w-3/4 flex flex-col lg:flex-row justify-center items-center gap-10 lg:mt-10">
            <div className="border border-red-500 p-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
              <Image
                src={currentTeacher?.teacher_avatar}
                alt="alt"
                className="w-20 h-20 object-cover rounded-full border"
                width={1000}
                height={0}
              />
              <div className="text-center space-y-1 mt-4">
                <h3 className="text-xl font-bold">
                  {currentTeacher?.teacher_name}
                </h3>
                <p className="text-green-600 font-medium">
                  {/* {HELPER.renderStatusTimeKeeping(
                    currentTeacher?.latest_status || "need-check-in"
                  )} */}
                  Đang trong ca
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h1 className="text-xl text-center">
                Bạn đã Check-in lúc{" "}
                <strong>
                  {HELPER.formatDateTime(
                    currentTeacher?.latest_datetime_check_in
                  )}
                </strong>
                &nbsp;ngày&nbsp;
                <strong>
                  {HELPER.formatDateDay(
                    currentTeacher?.latest_datetime_check_in
                  )}
                </strong>
              </h1>
              <div className="flex justify-center items-center">
                <div
                  onClick={handleCheckOut}
                  className="w-28 h-28 rounded-full border border-dashed border-red-500 text-red-500 hover:border-2 hover:font-extrabold flex justify-center items-center cursor-pointer"
                >
                  {isLoading ? (
                    <Loader className="w-6 h-6 ml-2 animate-spin" />
                  ) : (
                    "Check-out"
                  )}
                </div>
              </div>
              <h1 className="text-xl text-center">
                Thời gian bạn đang làm việc là: <strong>{workingTime}</strong>.
              </h1>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
