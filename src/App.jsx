import { Search } from "pages/Search/";
import { Account } from "pages/Account";
import { History } from "pages/History";
import { SharedLayout } from "components/SharedLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "PrivateRoute";
import { useAuthStore, tokenSelector } from "modules/Authorization";
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
          element: <Search />,
          loader: null,
        },
        {
          path: "/library",
          element: "library",
          loader: null,
        },
        {
          path: "/history",
          element: (
            <PrivateRoute component={<History />} redirectTo="/account" />
          ),
          loader: null,
        },
        {
          path: "/account",
          element: <Account />,
          loader: null,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

const App = () => {
  const token = useAuthStore(tokenSelector);
  useEffect(() => {
    console.log(token);
    if (token) {
      setBearer(token);
    }
  }, [token]);
  return <RouterProvider router={router} />;
};

export default App;
