import { useRoutes } from "react-router-dom";
import DashboardLayout from "./Layout/dashboard/DashBoardLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import BooksDesc from "./pages/BooksDesc";
import WishList from "./pages/WishList";
import CheckOut from "./pages/CheckOut";
import AuthorAndIllustrator from "./pages/AuthorAndIllustrator";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "author-illustrator",
          element: <AuthorAndIllustrator />,
        },
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
        {
          path: "books/wishlist",
          element: <WishList />,
        },
        {
          path: "books/checkout",
          element: <CheckOut />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "orders",
          element: <OrdersPage/>,
        },
      ],
    },
  ]);
  return routes;
}
