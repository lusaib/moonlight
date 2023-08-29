import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home } from "../pages";

const routes: RouteObject[] = [
  {
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      {
        id: "home",
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
