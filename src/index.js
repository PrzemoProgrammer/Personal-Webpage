import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CorrectVocabulary from "./pages/games/CorrectVocabulary/CorrectVocabulary";
import GamesPage from "./pages/games/Games";
import AppsPage from "./pages/apps/Apps";
import AboutPage from "./pages/about/About";
import NFTsPage from "./pages/NFT/NFT";
import ERROR_500 from "./pages/error_500/Error_500";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import NFTDetails from "./pages/NFTDetails/NFTDetails";
import SellNFT from "./pages/sellNFT/SellNFT";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "CorrectVocabulary",
    element: <CorrectVocabulary />,
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
    path: "NFT",
    element: <NFTsPage />,
  },
  {
    path: "NFTDetails",
    element: <NFTDetails />,
  },
  {
    path: "SellNFT",
    element: <SellNFT />,
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
