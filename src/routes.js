import { useRoutes } from "react-router-dom";
import DashboardLayout from "./Layout/dashboard/DashBoardLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import BooksDesc from "./pages/BooksDesc";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "books",
          element: <Books />,
        },
        {
          path: "books/:id",
          element: <BooksDesc />,
        },
      ],
    },
  ]);
  return routes;
}
