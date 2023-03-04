import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
  const err = useRouteError();
  // console.log(err.error.message)
//   console.log(err.status)
  console.log(err)
//   console.log(err.statusText)
  return (
    <div className="route-error-page">
      <h2>Something went wrong!!</h2>
      <h1>{err?.error?.message}</h1>
      <h1>{err?.status+':'+err?.statusText}</h1>
    </div>
  );
};

export default ErrorRoute;
