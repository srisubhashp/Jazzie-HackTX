import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/Jazzie" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🏗 Jazzie"
        subTitle=""
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
