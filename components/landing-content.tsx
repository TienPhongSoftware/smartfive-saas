"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ms Thủy - Yamato Dana",
    avatar: "J",
    title: "Giám Đốc",
    description: "Tôi rất hài lòng với dịch vụ mà tôi nhận được! Đội ngũ rất hỗ trợ và chuyên nghiệp. Họ đã vượt qua mọi mong đợi để đáp ứng nhu cầu của tôi và mang lại kết quả xuất sắc",
  },
  {
    name: "Mr Tuấn - Giã Trân - Huế",
    avatar: "E",
    title: "Giám Đốc",
    description: "Tôi đã là khách hàng trong nhiều năm và tôi tự tin khẳng định rằng đây là công ty tốt nhất để làm việc. Nhân viên thân thiện và sản phẩm của họ có chất lượng tốt nhất. Tôi chưa bao giờ thất vọng với dịch vụ của họ. Tiếp tục công việc tuyệt vời!",
  },
  {
    name: "Ms Châu - Yamato Hồ Chí Minh",
    avatar: "M",
    title: "Phó Giám Đốc Sản Xuất",
    description:
      "Trải nghiệm tuyệt vời từ đầu đến cuối! Đội ngũ đã chú ý đến yêu cầu của tôi và cung cấp hỗ trợ tuyệt vời trong suốt quá trình. Tôi rất hài lòng với sản phẩm cuối cùng và chắc chắn sẽ quay lại thêm. Rất hài lòng!",
  },
  {
    name: "Ms Châu",
    avatar: "M",
    title: "Trưởng Phòng Kỹ Thuật",
    description:
      "Tôi muốn bày tỏ lòng biết ơn với dịch vụ đặc biệt mà tôi nhận được. Đội ngũ rất nhanh chóng, hiệu quả và đã vượt quá mong đợi của tôi. Thật hiếm khi tìm thấy một công ty chuyên nghiệp và đáng tin cậy như vậy. Cảm ơn bạn!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Đánh Giá Thực Tế
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
