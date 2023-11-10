import React from "react";

export default function DeleteAllBtn({ handleDeleteAll }) {
  return (
    <div>
      <button className="deleteAllBtn" onClick={handleDeleteAll}>
        Delete ALL
      </button>
    </div>
  );
}
