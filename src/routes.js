import { Navigate, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { login, logout, selectIsAuthenticated } from "./store/userSlice";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { getUserById } from "./api/user";
import { errorNotification } from "./utils/notifications";
import { setCartItems } from "./store/cartSlice";
import Loading from "./Reusable/Loading";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./Layout/Footer/PrivacyPolicy";
import TeamsCondition from "./Layout/Footer/TeamsCondition";
import PaymentStatus from "./pages/PaymentStatus";

export default function Router() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const cartItems = localStorage.getItem("cartItems");
      dispatch(setCartItems(JSON.parse(cartItems)));

      if (user) {
        const { uid } = user;
        console.log("uid", uid);
        getUserById(uid, (result) => {
          console.log("userdetail: ", result);
          if (result.success) {
            dispatch(login(result.data));
            // Set authChecked to true once authentication state is checked
            setAuthChecked(true);
          } else {
            errorNotification(result.err.message);
          }
        });
      } else {
        dispatch(logout());
        // Set authChecked to true once authentication state is checked
        setAuthChecked(true);
      }
    });

    // Clean up the subscription
    return unsubscribe;
  }, []);

  const AuthenticatedRoute = ({ element, ...rest }) =>
    isAuthenticated ? element : <Navigate to="/" />;

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
          path: "wishlist",
          element: <AuthenticatedRoute element={<WishList />} key="wishlist" />,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
        {
          path: "profile",
          element: (
            <AuthenticatedRoute element={<ProfilePage />} key="profile" />
            // <ProfilePage />
          ),
        },
        {
          path: "orders",
          element: (
            <AuthenticatedRoute element={<OrdersPage />} key="orders" />
            // <OrdersPage />
          ),
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "terms-and-condition",
          element: <TeamsCondition />,
        },
        {
          path: "payment-status",
          element: <PaymentStatus />,
        },
      ],
    },
  ]);

  // Wait until auth state is checked before rendering routes
  if (!authChecked) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return routes;
}
