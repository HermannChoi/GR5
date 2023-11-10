import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function AnimatedNum({ totalExpense }) {
  return (
    <div className="container">
      <AnimatedNumbers
        includeComma
        animateToNumber={totalExpense}
        fontStyle={{ fontSize: "20px" }}
        configs={[
          { mass: 1, tension: 100, friction: 30 },
          { mass: 1, tension: 100, friction: 30 },
          { mass: 1, tension: 100, friction: 30 },
        ]}
      ></AnimatedNumbers>
    </div>
  );
}
