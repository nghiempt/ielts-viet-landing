import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Section06Popup = ({
  backgroundColor,
  title,
  thumbnail,
  description,
  imageList,
}: {
  backgroundColor: string;
  title: string;
  thumbnail: string;
  description: string;
  imageList: string[];
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`flex flex-col ${backgroundColor} justify-between rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer mx-2 lg:mx-0`}
        >
          <h3 className="text-xl font-bold">{title}</h3>
          <Image
            src={thumbnail}
            alt="alt"
            className="w-full h-[300px] object-cover rounded-lg mt-4"
            width={400}
            height={200}
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[1200px] max-h-[100vh]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>
            <span className="!text-[20px]">{title}</span>
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          {imageList.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                alt=""
                width={1000}
                height={1000}
                className="object-cover rounded-lg h-[200px]"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Section06Popup;
