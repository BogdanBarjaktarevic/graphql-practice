import React from "react";

const Info = ({ getHiddenProp }) => {
  if (getHiddenProp) return <div>True</div>;
  return <div>False</div>;
};

export default Info;
