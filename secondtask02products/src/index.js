import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import Error404 from "./components/Error404";
import Detail from "./components/Detail";
import Error from "./components/Error";
import AddForm from "./components/AddForm";
import Root from "./components/Root/Root";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
        errorElement: <Error />,
      },

      {
        path: "/detail/:id",
        element: <Detail />,
        errorElement: <Error />,
      },
      {
        path: "/addlist",
        element: <AddForm />,
        errorElement: <Error />,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={rout} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
