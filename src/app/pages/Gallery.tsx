import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1770149682900-7709f2446ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYnVkZGhpc3QlMjB0ZW1wbGUlMjBwYWdvZGF8ZW58MXx8fHwxNzcwNjMzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cổng chùa Bổ Đà",
    description: "Lối vào trang nghiêm và uy nghi",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1598791074971-28b36cac6c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZSUyMHZpZXRuYW18ZW58MXx8fHwxNzcwNjMzNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Kiến trúc chùa",
    description: "Phong cách Việt Nam truyền thống",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1770149682865-fb706e3c11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRlbXBsZSUyMGludGVyaW9yJTIwZ29sZGVuJTIwc3RhdHVlfGVufDF8fHx8MTc3MDYzMzQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Chánh điện",
    description: "Nơi thờ Phật trang nghiêm",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1759686063226-05e6563905e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMG1vbmtzJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzA2MzM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tu tập thiền định",
    description: "Không gian thanh tịnh cho thiền định",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1558869632-38e355dfb5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwNjMzNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Vườn chùa",
    description: "Cảnh quan xanh mát, bình yên",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1555035903-c178402e5eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNlbnNlJTIwYnVybmluZyUyMHRlbXBsZXxlbnwxfHx8fDE3NzA2MzM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Hương khói nhang",
    description: "Không khí thiêng liêng Phật giáo",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Thư Viện Ảnh</h1>
          <p className="text-xl opacity-90">
            Khám phá vẻ đẹp của chùa Bổ Đà qua hình ảnh
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Chụp Ảnh Tại Chùa</h2>
          <p className="text-gray-700 mb-6">
            Chùa Bổ Đà là một địa điểm tuyệt vời cho nhiếp ảnh và lưu giữ kỷ niệm. Khi chụp ảnh, xin quý khách lưu ý:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-semibold mb-2">Tôn trọng không gian</h3>
              <p className="text-gray-600 text-sm">
                Không chụp ảnh trong lúc có lễ Phật hoặc hoạt động tôn giáo đang diễn ra
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🤫</div>
              <h3 className="font-semibold mb-2">Giữ trật tự yên lặng</h3>
              <p className="text-gray-600 text-sm">
                Tránh gây ồn ào, ảnh hưởng đến người tu hành và các Phật tử khác
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">👔</div>
              <h3 className="font-semibold mb-2">Ăn mặc lịch sự</h3>
              <p className="text-gray-600 text-sm">
                Mặc trang phục chỉnh tề, kín đáo khi đến tham quan và chụp ảnh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-lg opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
