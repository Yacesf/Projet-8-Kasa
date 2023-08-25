import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import ErrorPage from "./pages/ErrorPage/errorPage";
import AppartmentPage from "./pages/AppartmentPage/appartment-page";
import { AppartmentProvider } from "./context/AppartmentContext";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div>
        <ErrorPage />
      </div>
    ),
  },
  {
    path: "/appartment/:id",
    element: <AppartmentPage />,
    errorElement: (
      <div>
        <ErrorPage />
      </div>
    ),
  },
  {
    path: "/about",
    element: <About />,
    errorElement: (
      <div>
        <ErrorPage />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppartmentProvider>
      <RouterProvider router={router} />
    </AppartmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
