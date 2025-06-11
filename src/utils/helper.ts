const formatVND = (money: number) => {
  const number = Number(money);
  if (isNaN(number)) {
    return "Invalid number";
  }
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};
const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const hours = parts.find((part) => part.type === "hour")!.value;
  const minutes = parts.find((part) => part.type === "minute")!.value;
  const seconds = parts.find((part) => part.type === "second")!.value;

  return `${hours}:${minutes}:${seconds}`;
};

const formatDateDay = (isoDate: string) => {
  const date = new Date(isoDate);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const day = parts.find((part) => part.type === "day")!.value;
  const month = parts.find((part) => part.type === "month")!.value;
  const year = parts.find((part) => part.type === "year")!.value;

  return `${day}/${month}/${year}`;
};

const convertSpacesToDash = (input: string) => {
  return input.trim().replace(/\s+/g, "-");
};
const sanitizeContent = (html: string) => {
  return html.replace(/<img[^>]*>/g, "");
};

const renderStatusTimeKeeping = (status: string) => {
  let result = "";
  switch (status) {
    case "need-check-in":
      result = "Trống";
      break;
    default:
      result = "Đang trong ca";
      break;
  }
  return result;
};

const calculateWorkingTime = (latestCheckIn: string) => {
  if (!latestCheckIn) {
    return "Not checked in yet";
  }

  const checkInTime = new Date(latestCheckIn);
  const currentTime = new Date();
  const timeDiffMs = currentTime.getTime() - checkInTime.getTime();

  const hours = Math.floor(timeDiffMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiffMs % (1000 * 60)) / 1000);

  return `${hours}giờ ${minutes}phút ${seconds}giây`;
};

const formatDate2 = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const HELPER = {
  formatVND,
  formatDate,
  formatDate2,
  formatDateTime,
  formatDateDay,
  convertSpacesToDash,
  renderStatusTimeKeeping,
  sanitizeContent,
  calculateWorkingTime,
};
