import React from "react";
import NewFormBtn from "./Buttons/NewFormBtn";

export default function Form({
  handleSubmit,
  handleChange,
  nameValue,
  handleChange2,
  moneyValue,
  firstInputRef,
  submitBtnValue,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="addSpace">
          <div className="AS_name">
            지출 항목
            <input
              type="text"
              className="input"
              placeholder="ex)월세"
              onChange={handleChange}
              value={nameValue}
              ref={firstInputRef}
              required
            />
          </div>
          <div className="AS_name">
            비용
            <input
              type="number"
              className="input"
              placeholder="0"
              onChange={handleChange2}
              value={moneyValue}
              min={0}
              required
            />
          </div>
          <NewFormBtn submitBtnValue={submitBtnValue} />
        </div>
      </form>
    </div>
  );
}
