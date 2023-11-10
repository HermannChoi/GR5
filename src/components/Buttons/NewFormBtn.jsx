import React from "react";

export default function NewFormBtn(handleAddClick) {
  return (
    <input
      className="submitBtn material-icons"
      type="submit"
      onClick={handleAddClick}
      value="add"
    />
  );
}
