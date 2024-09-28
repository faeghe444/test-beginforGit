import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div class="ErrorBox">
        <div class="titleError">
          <b>Oops!!!!!</b>{" "}
        </div>
        <div class="comment">
          {" "}
          Looks like somthing it is wrong .{error.message}
          <br> Please rty later </br>
        </div>
      </div>
    </>
  );
};

export default Error;
