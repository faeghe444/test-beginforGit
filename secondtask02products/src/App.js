import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect } from "react";
import * as yup from "yup";
import Header from "./components/Header";
import axios from "axios";
import AddForm from "./components/AddForm";
import Error404 from "./components/Error404";
import Detail from "./components/Detail";
import React, { useState } from "react";
import Product from "./components/Product";
import ProductsList from "./components/ProductsList";

function App() {
  const date0 = new Date();
  // const now = date0.toLocaleString("default", {
  //   day: "numeric",
  //   mounth: "long",
  //   year: "numeric",
  // });
  date0.setDate(date0.getDate());
  let now = date0.toLocaleDateString();
  console.log(now);

  const [products, setProducts] = useState([]);
  async function getproducts() {
    const res = await axios.get(
      "https://66e4467dd2405277ed13c1e6.mockapi.io/listproductCo"
    );
    setProducts(res.data);
  }

  useEffect(() => {
    getproducts();
  }, []);

  // *****************************************************
  return (
    <>
      {/* ******************************************************************** */}
      {/* product */}
      <ProductsList
        onHandleDelete={() => {}}
        products={products}
        setProducts={setProducts}
        date={now}
      />

      {/* **************************************************************************** */}
      {/* Detatil */}
      {/* <Detail products={products} /> */}
      {/* ***************************************************************************** */}
      {/* Add form */}
      {/* <AddForm setProducts={setProducts} products={products} /> */}
      {/* ****************************************************************************** */}
      {/* Error */}
    </>
  );
}

export default App;
