import { useRoutes } from "react-router-dom";
import DashboardLayout from "./Layout/dashboard/DashBoardLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return routes;
}
