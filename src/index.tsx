import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/default";
import HomeController from "./content/home/Controller";
import { ApiProvider } from "./providers/ApiProvider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeController />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <ApiProvider>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </ApiProvider>
);
