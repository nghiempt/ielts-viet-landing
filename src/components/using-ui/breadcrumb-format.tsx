import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";

interface BreadcrumbformatProps {
  currentPath: string;
}

export function BreadcrumbFormat({ currentPath }: BreadcrumbformatProps) {

  const pathSegments = currentPath.split('/').filter(Boolean);
  const getSegmentDisplay = (segment: string): string => {
    switch (segment) {
      case "khoa-hoc":
        return "Khóa Học";
      case "bang-tin":
        return "Bảng Tin"
      case "giang-vien":
        return "Giảng Viên"
      case "hoc-vien":
        return "Học Viên"
      case "lien-he":
        return "Liên Hệ"
      default:
        return segment;
    }
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbSeparator />
            {getSegmentDisplay(segment)}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
