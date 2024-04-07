import { IzoboxProvider } from "@providers/IzoboxProvider";
import { Theme } from "@providers/Theme/index";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageLayout } from "./pages/layout";
import { MainPage } from "./pages/MainPage";
import { PoliticsPage } from "./pages/PoliticsPage";
import { GlobalStyles } from "./styled";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: "/",
    children: [{ element: <MainPage />, index: true }, { element: <PoliticsPage />, path: 'politics' }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <IzoboxProvider>
        <RouterProvider router={router} /></IzoboxProvider>
    </Theme>
  </React.StrictMode>,
);
