import React, { useState } from "react";
import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";

const ProductsList = ({ setProducts, products, handleDelete, date }) => {
  async function getproducts() {
    const res = await axios.get(
      "https://66e4467dd2405277ed13c1e6.mockapi.io/listproductCo"
    );
    setProducts(res.data);
  }

  useEffect(() => {
    getproducts();
  }, []);

  function handleProduct() {
    alert("Are you sure Edit or Add Item?");
  }
  async function handleDelete(id) {
    alert("Are you sure Delete Item?");

    setProducts(products.filter((it) => it.id !== id));
  }
  function handleDetail(id) {}
  return (
    <>
      <div className="ProductBox">
        {products.map((item, index) => {
          return (
            <Product
              image={item.image}
              title={item.title}
              desc={item.desc}
              date={date}
              key={index}
              onHandleEdit={handleProduct}
              onHandleDelete={() => handleDelete(item.id)}
              onHandleDetail={handleDetail}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
