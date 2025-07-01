"use client";

import Image from "next/image";

const Section02_1 = () => {
  return (
    <>
      <div className="text-center mx-5">
        <div className="relative inline-block my-14">
          <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
            Các đối tác chiến lược toàn diện của IELTS VIỆT
          </h2>
        </div>
      </div>
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 px-1 items-center justify-center lg:px-[0px]">
        <div className="max-w-md p-1">
          <div className="relative">
            <div className="flex justify-center items-center gap-4">
              <Image
                src="https://cdn.freelogovectors.net/wp-content/uploads/2021/06/idp-logo-freelogovectors.net_.png"
                alt="alt"
                className="w-5/6 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="max-w-md p-1">
          <div className="relative">
            <div className="flex justify-center items-center gap-4">
              <Image
                src="https://res.cloudinary.com/farmcode/image/upload/v1751362461/ielts-viet/cong-ty-co-phan-quoc-te-inmeko1723802186_n2y3a7.png"
                alt="alt"
                className="w-2/5 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                width={400}
                height={0}
              />
              <div className="font-semibold">CTY Cổ Phần Quốc Tế INMEKO</div>
            </div>
          </div>
        </div>
        <div className="max-w-md p-1">
          <div className="relative">
            <div className="flex justify-center items-center gap-4">
              <Image
                src="https://htogroup.com.vn/images/logo.png"
                alt="alt"
                className="w-1/4 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                width={400}
                height={200}
              />
              <div className="font-semibold">Công Ty Du Học HTO</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section02_1;
