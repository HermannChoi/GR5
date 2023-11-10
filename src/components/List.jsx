import React from "react";
import DeleteBtn from "./Buttons/DeleteBtn";

export default function List({ expenseData, handleClick, handleAddClick }) {
  return (
    <div>
      <div className="listBox">
        {expenseData.map((data) => (
          <div className="list" key={data.id}>
            <div className="expenseTitle">{data.title}</div>
            <div className="expenseMoney">{data.money.toLocaleString()} 원</div>
            <DeleteBtn
              handleClick={handleClick}
              data={data}
              handleAddClick={handleAddClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
