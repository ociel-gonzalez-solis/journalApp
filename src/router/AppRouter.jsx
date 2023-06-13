import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthRouter, AuthRoutes } from "../auth/routes";
import { JournalRouter, JournalRoutes } from "../journal/routes";
import { ErrorPage } from "../ui/ErrorPage";
import { CheckingAuth } from "../ui";
import { PublicRoute, PrivateRoute } from "./";
import { useCheckAuth } from "../hooks";

const routesConfig = createBrowserRouter([
  {
    path: "/auth/*",
    element: (
      <PublicRoute>
        <AuthRouter />
      </PublicRoute>
    ),
    children: AuthRoutes,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <JournalRouter />
      </PrivateRoute>
    ),
    children: JournalRoutes,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/auth/login"} />,
  },
]);

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") return <CheckingAuth />;

  return <RouterProvider router={routesConfig} />;
};
