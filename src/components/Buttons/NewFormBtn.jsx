import React from "react";

export default function NewFormBtn({ submitBtnValue }) {
  return (
    <div>
      <input
        className="submitBtn material-icons"
        type="submit"
        value={`${submitBtnValue}`}
      />
    </div>
  );
}
