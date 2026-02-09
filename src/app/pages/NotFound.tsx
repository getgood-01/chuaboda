import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl mb-4">Không Tìm Thấy Trang</h2>
        <p className="text-gray-600 mb-8">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
        </p>
        <Link to="/">
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Home className="w-4 h-4 mr-2" />
            Về Trang Chủ
          </Button>
        </Link>
      </div>
    </div>
  );
}
