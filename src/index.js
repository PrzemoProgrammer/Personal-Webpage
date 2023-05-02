import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ScalabilityMountain from "./pages/games/Pong/Pong";
import GamesPage from "./pages/games/Games";
import AppsPage from "./pages/apps/Apps";
import AboutPage from "./pages/about/About";
import ERROR_500 from "./pages/error_500/Error_500";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ScalabilityMountain",
    element: <ScalabilityMountain />,
  },
  {
    path: "Games",
    element: <GamesPage />,
  },
  {
    path: "Apps",
    element: <AppsPage />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "Error_500",
    element: <ERROR_500 />,
  },
  {
    path: "Privacy_Policy",
    element: <PrivacyPolicy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
