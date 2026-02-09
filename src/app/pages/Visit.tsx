import { MapPin, Clock, DollarSign, Info, Bus, Car, Bike } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Visit() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Hướng Dẫn Tham Quan</h1>
          <p className="text-xl opacity-90">
            Thông tin cần thiết để tham quan chùa Bổ Đà
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
            <MapPin className="w-10 h-10 text-amber-600 mb-3" />
            <h3 className="font-semibold mb-2">Địa chỉ</h3>
            <p className="text-gray-600 text-sm">
              Đ. Vành Đai 4, Thượng Lát, Việt Yên, Bắc Giang
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
            <Clock className="w-10 h-10 text-amber-600 mb-3" />
            <h3 className="font-semibold mb-2">Giờ mở cửa</h3>
            <p className="text-gray-600 text-sm">
              Hàng ngày<br />5:00 - 18:00
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
            <DollarSign className="w-10 h-10 text-amber-600 mb-3" />
            <h3 className="font-semibold mb-2">Vé vào cửa</h3>
            <p className="text-gray-600 text-sm">
              Miễn phí<br />Mọi đối tượng
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
            <Info className="w-10 h-10 text-amber-600 mb-3" />
            <h3 className="font-semibold mb-2">Thông tin</h3>
            <p className="text-gray-600 text-sm">
              Chào đón<br />Phật tử & Du khách
            </p>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="direction" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="direction">Đường Đi</TabsTrigger>
            <TabsTrigger value="rules">Quy Định</TabsTrigger>
            <TabsTrigger value="activities">Hoạt Động</TabsTrigger>
          </TabsList>

          {/* Direction Tab */}
          <TabsContent value="direction" className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Cách Đến Chùa Bổ Đà</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Car className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Đi Xe Ô Tô</h3>
                    <p className="text-gray-700 mb-2">
                      Từ trung tâm TP Bắc Giang, di chuyển theo hướng Việt Yên, đi theo đường Vành Đai 4. Chùa nằm tại xã Thượng Lát, dễ dàng nhận ra với cổng chùa trang nghiêm.
                    </p>
                    <p className="text-gray-600 text-sm">
                      ⏱️ Thời gian: Khoảng 20-30 phút từ trung tâm Bắc Giang
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Bus className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Đi Xe Buýt</h3>
                    <p className="text-gray-700 mb-2">
                      Có thể đi xe buýt tuyến nội tỉnh theo hướng Việt Yên, xuống tại trạm gần nhất rồi di chuyển bằng xe ôm hoặc đi bộ vào chùa.
                    </p>
                    <p className="text-gray-600 text-sm">
                      💰 Chi phí: Khoảng 10.000 - 20.000 VNĐ
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Bike className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Đi Xe Máy</h3>
                    <p className="text-gray-700 mb-2">
                      Đường đến chùa rộng rãi, thuận lợi cho xe máy di chuyển. Có bãi đỗ xe rộng rãi và an toàn.
                    </p>
                    <p className="text-gray-600 text-sm">
                      🅿️ Bãi đỗ xe miễn phí
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Lưu ý:</strong> Có thể sử dụng Google Maps hoặc các ứng dụng bản đồ để tìm đường chính xác. Tìm kiếm "Chùa Bổ Đà, Thượng Lát, Việt Yên, Bắc Giang".
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules" className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Quy Định Khi Tham Quan</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-green-700">✓ Nên Làm</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Ăn mặc chỉnh tề, kín đáo, lịch sự</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Cởi giày, dép trước khi vào chánh điện</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Giữ im lặng, tôn trọng không gian tâm linh</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Tắt hoặc chuyển chế độ im lặng điện thoại</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Giữ gìn vệ sinh chung</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Thắp nhang đúng nơi quy định</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Hỏi phép khi muốn chụp ảnh trong chánh điện</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-red-700">✗ Không Nên</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Mặc quần short, áo ba lỗ hoặc trang phục hở hang</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Gây ồn ào, chạy nhảy trong khuôn viên chùa</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Hút thuốc trong khu vực chùa</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Sử dụng đèn flash khi chụp ảnh các pháp tượng</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Xả rác bừa bãi</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Chạm vào các pháp tượng, di vật</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Ăn uống trong chánh điện</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold mb-2 text-blue-900">💡 Lưu Ý Đặc Biệt</h4>
                <p className="text-gray-700">
                  Trong các ngày lễ lớn (Tết Nguyên Đán, Lễ Phật Đản, Vu Lan...), chùa thường đông người. 
                  Quý khách nên đến sớm và chú ý giữ trật tự. Nếu muốn tham gia các khóa tu hoặc sinh hoạt Phật sự, 
                  vui lòng liên hệ Ban quản lý chùa trước.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Hoạt Động Tại Chùa</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-semibold text-xl mb-2">🙏 Lễ Phật & Cầu An</h3>
                  <p className="text-gray-700 mb-2">
                    Du khách có thể tham gia lễ Phật, thắp nhang cầu an cho gia đình, bạn bè. Nhang và vàng mã có sẵn tại chùa với giá phải chăng.
                  </p>
                  <p className="text-gray-600 text-sm">⏰ Thời gian: Mọi lúc trong giờ mở cửa</p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-semibold text-xl mb-2">🧘 Thiền Định</h3>
                  <p className="text-gray-700 mb-2">
                    Chùa có không gian yên tĩnh phù hợp cho thiền định. Phật tử có thể tham gia các buổi thiền tập trung vào sáng sớm hoặc chiều tối.
                  </p>
                  <p className="text-gray-600 text-sm">⏰ Sáng: 5:30 - 7:00 | Chiều: 17:00 - 18:00</p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-semibold text-xl mb-2">📖 Học Phật Pháp</h3>
                  <p className="text-gray-700 mb-2">
                    Chùa thường xuyên tổ chức các lớp học Phật pháp cho Phật tử, đặc biệt là thanh thiếu niên. Nội dung bao gồm giáo lý cơ bản, đạo đức sống và các pháp tu hành.
                  </p>
                  <p className="text-gray-600 text-sm">⏰ Chủ nhật hàng tuần</p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-semibold text-xl mb-2">🎊 Lễ Hội Phật Giáo</h3>
                  <p className="text-gray-700 mb-2">
                    Các lễ hội lớn như Tết Nguyên Đán, Lễ Phật Đản (Rằm tháng 4), Lễ Vu Lan (Rằm tháng 7) được tổ chức long trọng với nhiều hoạt động văn hóa tâm linh.
                  </p>
                  <p className="text-gray-600 text-sm">⏰ Theo lịch Phật giáo</p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-semibold text-xl mb-2">💝 Hoạt Động Từ Thiện</h3>
                  <p className="text-gray-700 mb-2">
                    Chùa thường xuyên tổ chức các hoạt động từ thiện như cúng dường cho người nghèo, ủng hộ học sinh khó khăn, thăm hỏi người già cô đơn.
                  </p>
                  <p className="text-gray-600 text-sm">⏰ Theo từng đợt</p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-semibold text-xl mb-2">🌸 Khóa Tu Ngắn Hạn</h3>
                  <p className="text-gray-700 mb-2">
                    Dành cho những ai muốn trải nghiệm cuộc sống tu hành trong môi trường thanh tịnh, rèn luyện tâm hồn và tìm hiểu sâu hơn về Phật pháp.
                  </p>
                  <p className="text-gray-600 text-sm">⏰ Liên hệ trước để đăng ký</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                <h4 className="font-semibold mb-3">📞 Liên Hệ Đăng Ký</h4>
                <p className="text-gray-700">
                  Để biết thêm thông tin chi tiết về các hoạt động, lịch trình khóa tu hoặc lễ hội, 
                  quý Phật tử và du khách có thể liên hệ trực tiếp với Ban quản lý chùa Bổ Đà hoặc 
                  đến trực tiếp để gặp Sư thầy trong giờ hành lễ.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8">Vị Trí Trên Bản Đồ</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                <p className="text-gray-600">
                  Đ. Vành Đai 4, Thượng Lát, Việt Yên, Bắc Giang
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Có thể tìm kiếm "Chùa Bổ Đà, Bắc Giang" trên Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
