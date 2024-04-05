import { Footer } from "@components/Footer/index.tsx";
import { Header } from "@components/Header/index.tsx";
import { Theme } from "@providers/Theme/index.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { MainPage } from "./pages/MainPage.tsx";
import { GlobalStyles } from "./styled.ts";

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: "/",
    children: [{ element: <MainPage />, index: true }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
