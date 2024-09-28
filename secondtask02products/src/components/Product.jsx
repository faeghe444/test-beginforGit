import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({
  image,
  title,
  desc,
  date,
  onHandleEdit,
  onHandleDelete,
  onHandleDetail,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ProductItem" onClick={onHandleDetail}>
        <div className="imagesbox">
          <img
            className="images"
            onClick={() => navigate("/detail/" + id)}
            src={image}
          />
        </div>

        <h2 className="ProductItem2">{title}</h2>
        <h3 className="ProductItem2 ProductItem3">{desc}</h3>
        <div className="moreButton">
          <span className="date">{date}</span>
          <div className="buttons">
            <button className="edit" onClick={onHandleEdit}>
              {" "}
              Edit
            </button>
            <button className="delete" onClick={onHandleDelete}>
              {" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
