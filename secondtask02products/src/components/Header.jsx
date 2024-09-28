import axios from "axios";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://66e4467dd2405277ed13c1e6.mockapi.io/listproductCo"
      );
      setProducts(response);
    };
    getProducts();
  }, []);

  function handleSearch(event) {
    setSearchItem(event.target.value);
  }

  // const filterProduct = products.filter((pr) =>
  //   pr.name.toLowerCase().includes(searchItem.toLowerCase())
  // );
  return (
    <>
      <header className="HeaderBox">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive && "HeaderItem0"} "HeaderItem"`
          }
        >
          ProductList
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `${isActive && "HeaderItem0"} "HeaderItem"`
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/addlist"
          className={({ isActive }) =>
            `${isActive && "HeaderItem0"} "HeaderItem"`
          }
        >
          Add Product
        </NavLink>
      </header>
      <div className="search">
        <input
          className="searchBox"
          placeholder="  Search Product ..."
          value={searchItem}
          onChange={handleSearch}
        ></input>
        <div className="searchIcon"></div>
      </div>
    </>
  );
};

export default Header;
