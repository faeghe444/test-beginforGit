import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log("params", id);

  async function getproducts() {
    const res1 = await axios.get(
      "https://66e4467dd2405277ed13c1e6.mockapi.io/listproductCo/" + id
    );
    console.log("res", res1);
    setProduct(res1.data);
  }

  // console.log("product", product);

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      <div class="Details">
        <div class="DetailImageBox">
          <img class="DetailImage" src={product.image} />
        </div>

        <h1 class="DetailTitle">{product.title}</h1>
        <div class="describtion">
          <p>{product.desc}</p>
        </div>
        <div class="date">{product.date}</div>
      </div>
    </>
  );
};

export default Detail;
