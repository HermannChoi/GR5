import React from "react";

export default function DeleteBtn({ handleClick, data }) {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          handleClick(data.id);
        }}
        className="material-icons delete"
      >
        delete
      </button>
    </div>
  );
}
