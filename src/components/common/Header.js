import React from "react";
import { Link } from "react-router-dom";

const MenuColor = "#a567a4";
export default () => (
  <div
    style={{ display: "flex", flexDirection: "row", justifyContent: "left" }}
  >
    <ul
      style={{ display: "flex", marginBottom: 20, fontSize: "15px !important" }}
    >
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <Link to="/">
          <span style={{ color: MenuColor, fontWeight: 600 }}>HOME</span>
        </Link>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          CONTAINERS
        </a>
      </li>

      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          KUBERNETES
        </a>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          ENODES
        </a>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          DATA ANALYTICS
        </a>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          VIRTUALIZATION
        </a>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          MACHINE LEARNING
        </a>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          CONTINUES DELIVERY
        </a>
      </li>
      <li style={{ listStyle: "none", padding: "0 10px" }}>
        <a href="/" style={{ color: "#c1c1c1", fontWeight: 600 }}>
          IOT
        </a>
      </li>
    </ul>
  </div>
);
