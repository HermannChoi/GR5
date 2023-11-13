import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function AnimatedNum({ totalExpense }) {
  return (
    <div className="container">
      <AnimatedNumbers
        includeComma
        animateToNumber={totalExpense}
        Style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
        configs={[
          { mass: 1, tension: 100, friction: 30 },
          { mass: 1, tension: 100, friction: 20 },
          { mass: 1, tension: 100, friction: 40 },
        ]}
      ></AnimatedNumbers>
    </div>
  );
}
