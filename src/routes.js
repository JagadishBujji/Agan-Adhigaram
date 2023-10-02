import { useRoutes } from "react-router-dom";
import DashboardLayout from "./Layout/dashboard/DashBoardLayout";

import Home from "./pages/Home";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return routes;
}
