import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Trang Chủ" },
    { path: "/lich-su", label: "Lịch Sử" },
    { path: "/thu-vien-anh", label: "Thư Viện Ảnh" },
    { path: "/huong-dan-tham-quan", label: "Hướng Dẫn Tham Quan" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="text-2xl">🏯</div>
              <span className="font-semibold text-lg text-amber-800">
                Chùa Bổ Đà
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-amber-700 font-medium"
                      : "text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors ${
                      isActive(link.path)
                        ? "text-amber-700 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Chùa Bổ Đà</h3>
              <p className="text-gray-400 text-sm">
                Một trong những ngôi chùa tiêu biểu tại Bắc Giang, mang đậm nét văn hóa Phật giáo Việt Nam.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Địa chỉ</h3>
              <p className="text-gray-400 text-sm">
                Đ. Vành Đai 4<br />
                Thượng Lát, Việt Yên<br />
                Bắc Giang, Việt Nam
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Thông tin</h3>
              <p className="text-gray-400 text-sm">
                Giờ mở cửa: 5:00 - 18:00<br />
                Miễn phí tham quan<br />
                Mọi đối tượng đều được chào đón
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          </div>
        </div>
      </footer>
    </div>
  );
}
