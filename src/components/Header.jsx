import React from "react";

export default function Header({ activeColorClass, headerName }) {
  return <div className={`title ${activeColorClass}`}>{headerName}</div>;
}
