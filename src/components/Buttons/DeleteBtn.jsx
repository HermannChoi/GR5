import React from "react";

export default function DeleteBtn({ handleClick, data, handleAddClick }) {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          handleClick(data.id);
          handleAddClick();
        }}
        className="material-icons delete"
      >
        delete
      </button>
    </div>
  );
}
