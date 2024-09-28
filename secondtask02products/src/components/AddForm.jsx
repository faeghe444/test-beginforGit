import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddForm = () => {
  const [image, setImage] = useState();
  const [pathURL, setPathURL] = useState();
  async function onUpload() {
    const imageData = new FormData();
    imageData.append("image", image);
    const result = await axios.post(
      "https://api.admin.sepehracademy.ir/api/upload/image",
      imageData
    );
    setPathURL(result.data.result);
  }
  // *************************************
  const navigat = useNavigate();
  async function onSubmit(values) {
    const res = await axios.post(
      "https://66e4467dd2405277ed13c1e6.mockapi.io/listproductCo",
      values
    );
    // setProducts([...products, values]);
    navigat("/");
    console.log(res);
  }
  // **************************************

  // useEffect(() => {
  //   onSubmit();
  // }, [res]);

  return (
    <>
      <Formik
        initialValues={{ title: "", desc: "", image: "", date: "" }}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="TitleForm">
            <b>Add New Product</b>
          </div>
          <div className="subtitle">
            <b>Product Image Picker</b>
          </div>
          <Field
            type="file"
            className="item1"
            name="pathURL ? pathURL"
            placeholder="  Image/.../01.png"
            onChange={(e) => setImage(e.target.files[0])}
          ></Field>
          <div className="subtitle">
            <b>Title</b>
          </div>
          <Field className="item1" type="text" name="title" required></Field>
          <div className="subtitle">
            <b>Description</b>
          </div>
          <Field
            className="item1 item2"
            type="text"
            name="desc"
            required
          ></Field>
          <div className="subtitle">
            <b>Date</b>
          </div>
          <Field
            className="item1"
            type="date"
            placeholder="  YYY-MM-DD  "
          ></Field>
          <button className="item1 item3" type="submit" onClick={onUpload}>
            Add Product
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddForm;
