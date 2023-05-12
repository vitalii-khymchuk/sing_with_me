import { SharedLayout } from "components/SharedLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "PrivateRoute";
import {
  useAuthStore,
  tokenSelector,
  getCurrentSelector,
  isLoggedInSelector,
} from "modules/Authorization";
import { useEffect } from "react";
import { setBearer } from "config/axiosConfig";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SharedLayout />,
      loader: null,
      children: [
        {
          index: true,
          async lazy() {
            let { Search } = await import("pages/Search");
            return {
              Component: () => (
                <PrivateRoute component={<Search />} redirectTo="/account" />
              ),
            };
          },
          loader: null,
        },
        {
          path: "/library",
          async lazy() {
            let { Saved } = await import("pages/Saved");
            return {
              Component: () => (
                <PrivateRoute component={<Saved />} redirectTo="/account" />
              ),
            };
          },
          loader: null,
        },
        {
          path: "/history",
          async lazy() {
            let { History } = await import("pages/History");
            return {
              Component: () => (
                <PrivateRoute component={<History />} redirectTo="/account" />
              ),
            };
          },
          loader: null,
        },
        {
          path: "/account",
          async lazy() {
            let { Account } = await import("pages/Account");
            return {
              Component: () => (
                <PrivateRoute component={<Account />} redirectTo="/account" />
              ),
            };
          },
          loader: null,
        },
        {
          path: "/details/:id",
          async lazy() {
            let { Details } = await import("pages/Details");
            return {
              Component: () => (
                <PrivateRoute component={<Details />} redirectTo="/account" />
              ),
            };
          },
          loader: null,
        },
      ],
    },
  ],
  {
    basename: "/sing_with_me",
  }
);

const App = () => {
  const isLoggedIn = useAuthStore(isLoggedInSelector);
  const getCurrent = useAuthStore(getCurrentSelector);
  const token = useAuthStore(tokenSelector);
  token && setBearer(token);

  useEffect(() => {
    if (isLoggedIn) {
      getCurrent();
    }
  }, [getCurrent, isLoggedIn]);
  return <RouterProvider router={router} />;
};

export default App;
