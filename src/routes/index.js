import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import Auth from "../layouts/Auth";
import VerifyOtp from "../components/Auth/VerifyOtp";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      element: <Auth />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "reset-password", element: <ForgetPassword /> },
        { path: "new-password", element: <NewPassword /> },
        { path: "verify-otp", element: <VerifyOtp /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },

        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <Groups /> },
        { path: "call", element: <Calls /> },
        { path: "Profile", element: <Profile /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Login = Loadable(lazy(() => import("../components/Auth/Login")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const Signup = Loadable(lazy(() => import("../components/Auth/Signup")));
const ForgetPassword = Loadable(
  lazy(() => import("../components/Auth/ForgetPassword"))
);
const NewPassword = Loadable(
  lazy(() => import("../components/Auth/NewPassword"))
);
const Groups = Loadable(lazy(() => import("../pages/dashboard/Groups")));
const Calls = Loadable(lazy(() => import("../pages/dashboard/Calls")));
const Profile = Loadable(lazy(() => import("../pages/dashboard/Profile")));
