import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Gallery } from "./pages/Gallery";
import { Visit } from "./pages/Visit";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "lich-su", Component: History },
      { path: "thu-vien-anh", Component: Gallery },
      { path: "huong-dan-tham-quan", Component: Visit },
      { path: "*", Component: NotFound },
    ],
  },
]);
