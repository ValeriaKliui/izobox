import { PATHS } from "@constants/paths";
import { IzoboxProvider } from "@providers/IzoboxProvider";
import { Theme } from "@providers/Theme/index";
import { store } from "@store/index";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageLayout } from "./pages/layout";
import { MainPage } from "./pages/MainPage";
import { OrderPage } from "./pages/OrderPage";
import { PoliticsPage } from "./pages/PoliticsPage";
import { GlobalStyles } from "./styled";

const router = createBrowserRouter(
  [
    {
      element: <PageLayout />,
      path: PATHS.MAIN,
      children: [
        { element: <MainPage />, index: true },
        { element: <PoliticsPage />, path: "politics" },
        {
          path: PATHS.ORDER,
          element: <OrderPage />,
        },
      ],
    },
  ],
  { basename: "/izobox" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <IzoboxProvider>
          <RouterProvider router={router} />
        </IzoboxProvider>
      </Theme>
    </Provider>
  </React.StrictMode>,
);
