import { Scroll, Landmark, Calendar, Users } from "lucide-react";

export function History() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1770149682865-fb706e3c11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRlbXBsZSUyMGludGVyaW9yJTIwZ29sZGVuJTIwc3RhdHVlfGVufDF8fHx8MTc3MDYzMzQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl mb-4">Lịch Sử Chùa Bổ Đà</h1>
          <p className="text-xl">Dòng chảy văn hóa và tâm linh</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl mb-6">Quá Trình Hình Thành</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Chùa Bổ Đà được xây dựng với mục đích tạo ra một không gian tâm linh thanh tịnh, phục vụ nhu cầu tu tập của Phật tử và cộng đồng trong vùng. Ngôi chùa là biểu tượng cho sự phát triển của Phật giáo tại Bắc Giang, góp phần quan trọng vào đời sống tinh thần của người dân địa phương.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-amber-50 p-8 rounded-lg">
            <Calendar className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Thời Kỳ Phát Triển</h3>
            <p className="text-gray-700">
              Trải qua các thời kỳ, chùa Bổ Đà không ngừng được tu bổ, nâng cấp và mở rộng. Ngôi chùa đã trở thành một trong những địa chỉ Phật giáo quan trọng tại huyện Việt Yên, thu hút đông đảo Phật tử và du khách thập phương.
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-lg">
            <Landmark className="w-12 h-12 text-amber-700 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Kiến Trúc Đặc Sắc</h3>
            <p className="text-gray-700">
              Kiến trúc chùa Bổ Đà mang đậm phong cách Phật giáo Việt Nam, với các công trình như chánh điện, nhà tổ, nhà khách được bố trí hài hòa. Mỗi công trình đều được chăm chút tỉ mỉ về mặt nghệ thuật trang trí.
            </p>
          </div>
        </div>

        {/* Main Historical Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ý Nghĩa Tâm Linh</h3>
              <p className="text-gray-700 mb-4">
                Chùa Bổ Đà không chỉ là nơi tu hành mà còn là trung tâm sinh hoạt văn hóa tâm linh của cộng đồng. Ngôi chùa thường xuyên tổ chức các khóa tu, lễ Phật đản sinh, lễ Vu Lan, và các hoạt động từ thiện, góp phần vào việc giáo dục đạo đức và lan tỏa những giá trị nhân văn.
              </p>
              <p className="text-gray-700">
                Với vị trí nằm trên tuyến đường Vành Đai 4, chùa dễ dàng tiếp cận, thu hút nhiều người dân từ các vùng lân cận đến lễ Phật, cầu an và tham gia các hoạt động Phật sự.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Các Di Vật Quý</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">🗿</div>
                  <div>
                    <h4 className="font-semibold mb-1">Tượng Phật</h4>
                    <p className="text-gray-700">
                      Các pháp tượng được điêu khắc tinh xảo, thể hiện đầy đủ các đặc điểm của nghệ thuật tạc tượng Phật giáo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">🔔</div>
                  <div>
                    <h4 className="font-semibold mb-1">Chuông Chùa</h4>
                    <p className="text-gray-700">
                      Chuông đồng được đúc công phu, âm thanh trong trẻo, vang xa, tạo nên không khí trang nghiêm.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">📜</div>
                  <div>
                    <h4 className="font-semibold mb-1">Kinh Sách</h4>
                    <p className="text-gray-700">
                      Bộ sưu tập kinh Phật phong phú, phục vụ cho việc nghiên cứu và tu tập của chư Tăng Ni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Scroll className="w-10 h-10 text-amber-700 mb-4" />
              <h4 className="font-semibold mb-3">Vai Trò Văn Hóa</h4>
              <p className="text-gray-700 text-sm">
                Chùa Bổ Đà đóng vai trò quan trọng trong việc bảo tồn và phát huy các giá trị văn hóa truyền thống, là nơi giáo dục đạo đức cho thế hệ trẻ.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-amber-700 mb-4" />
              <h4 className="font-semibold mb-3">Cộng Đồng Phật Tử</h4>
              <p className="text-gray-700 text-sm">
                Với cộng đồng Phật tử đông đảo và nhiệt tình, chùa luôn là nơi gắn kết tinh thần, lan tỏa những giá trị tốt đẹp trong đời sống.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Thông Tin</h4>
              <div className="space-y-2 text-sm">
                <p>📍 Địa chỉ: Đ. Vành Đai 4, Thượng Lát, Việt Yên, Bắc Giang</p>
                <p>⏰ Giờ mở cửa: 5:00 - 18:00</p>
                <p>🎫 Vé vào cửa: Miễn phí</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center">Hình Ảnh Lịch Sử</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1759686063226-05e6563905e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMG1vbmtzJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzA2MzM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tu hành tại chùa"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555035903-c178402e5eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNlbnNlJTIwYnVybmluZyUyMHRlbXBsZXxlbnwxfHx8fDE3NzA2MzM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hương khói nhang"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
