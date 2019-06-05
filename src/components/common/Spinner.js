import React from "react";
import loader from "../../assets/img/g-dots.gif";

export default () => {
  return (
    <div style={{ marginTop: 150, textAlign: "center" }}>
      <span>Please wait loading the posts...</span>
      <img
        src={loader}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
