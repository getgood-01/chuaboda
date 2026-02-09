import { Link } from "react-router";
import { MapPin, Clock, Heart, Camera } from "lucide-react";
import { Button } from "../components/ui/button";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1770149682900-7709f2446ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYnVkZGhpc3QlMjB0ZW1wbGUlMjBwYWdvZGF8ZW58MXx8fHwxNzcwNjMzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl mb-6">Chùa Bổ Đà</h1>
          <p className="text-xl md:text-2xl mb-8">
            Nơi bình yên giữa lòng Bắc Giang
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/lich-su">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                Khám Phá Lịch Sử
              </Button>
            </Link>
            <Link to="/huong-dan-tham-quan">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Hướng Dẫn Tham Quan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold text-lg mb-2">Vị Trí</h3>
              <p className="text-gray-600">
                Đ. Vành Đai 4, Thượng Lát, Việt Yên, Bắc Giang
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold text-lg mb-2">Giờ Mở Cửa</h3>
              <p className="text-gray-600">
                Hàng ngày: 5:00 - 18:00<br />
                Miễn phí tham quan
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Heart className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold text-lg mb-2">Đặc Điểm</h3>
              <p className="text-gray-600">
                Kiến trúc độc đáo, không gian thanh tịnh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Về Chùa Bổ Đà</h2>
              <p className="text-gray-700 mb-4">
                Chùa Bổ Đà là một ngôi chùa tiêu biểu tại tỉnh Bắc Giang, nằm tại vị trí thuận lợi trên đường Vành Đai 4, xã Thượng Lát, huyện Việt Yên. Ngôi chùa không chỉ là nơi tu hành của Phật tử mà còn là điểm đến tâm linh cho người dân và du khách.
              </p>
              <p className="text-gray-700 mb-4">
                Với kiến trúc đặc trưng của chùa Việt, Bổ Đà mang trong mình những giá trị văn hóa tâm linh sâu sắc. Không gian chùa được thiết kế hài hòa với thiên nhiên, tạo cảm giác thanh tịnh và bình yên cho mọi người đến thăm.
              </p>
              <p className="text-gray-700">
                Chùa là nơi thường xuyên tổ chức các hoạt động tâm linh, lễ hội Phật giáo và các khóa tu tập, góp phần bảo tồn và phát huy văn hóa Phật giáo Việt Nam.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1598791074971-28b36cac6c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZSUyMHZpZXRuYW18ZW58MXx8fHwxNzcwNjMzNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kiến trúc chùa Bổ Đà"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Điểm Nổi Bật</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-semibold mb-2">Kiến trúc độc đáo</h3>
              <p className="text-gray-600 text-sm">
                Kết hợp hài hòa giữa phong cách truyền thống và hiện đại
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-semibold mb-2">Không gian xanh</h3>
              <p className="text-gray-600 text-sm">
                Vườn cây, ao sen tạo nên môi trường thanh tịnh
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="font-semibold mb-2">Tâm linh cao</h3>
              <p className="text-gray-600 text-sm">
                Nơi tu hành và các hoạt động Phật sự ý nghĩa
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📿</div>
              <h3 className="font-semibold mb-2">Văn hóa Phật giáo</h3>
              <p className="text-gray-600 text-sm">
                Lưu giữ và phát huy truyền thống Phật giáo Việt Nam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl mb-4">Khám Phá Hình Ảnh Chùa Bổ Đà</h2>
          <p className="text-xl mb-8 opacity-90">
            Xem bộ sưu tập hình ảnh đẹp về ngôi chùa và các hoạt động Phật sự
          </p>
          <Link to="/thu-vien-anh">
            <Button className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg">
              Xem Thư Viện Ảnh
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
