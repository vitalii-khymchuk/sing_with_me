import { Search } from "pages/Search/";
import { Account } from "pages/Account";
import { SharedLayout } from "components/SharedLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          element: "history",
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
  return <RouterProvider router={router} />;
};

export default App;
