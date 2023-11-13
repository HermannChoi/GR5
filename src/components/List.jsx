import React from "react";
import DeleteBtn from "./Buttons/DeleteBtn";

export default function List({
  expenseData,
  handleClick,
  handleEditClick,
  setEditTarget,
}) {
  return (
    <div>
      <div className="listBox">
        {expenseData.map((data) => (
          <div className="list" key={data.id}>
            <div className="expenseTitle">{data.title}</div>
            <div className="expenseMoney">{data.money.toLocaleString()} 원</div>
            <button
              onClick={() => {
                handleEditClick(data);
                setEditTarget(data);
              }}
              className="material-icons edit"
            >
              edit
            </button>
            <DeleteBtn handleClick={handleClick} data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
