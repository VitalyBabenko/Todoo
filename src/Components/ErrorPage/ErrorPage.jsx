import React from "react";
import style from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={style.error}>
      <h2>404</h2>
      <h3>Server Error</h3>
      <p>
        An error occured in the application and your page could not be served.
        if you are the application owner, check your logs for details.
      </p>
    </div>
  );
};
