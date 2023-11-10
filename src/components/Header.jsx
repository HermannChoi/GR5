import React from "react";

export default function Header(activeColorClass) {
  return <div className={`title ${activeColorClass}`}>Budget Calculator</div>;
}
