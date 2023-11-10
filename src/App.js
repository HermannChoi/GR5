import React, { useState, useEffect } from "react";
import "./App.css";
import "./Header.css";
import "./AddSpace.css";
import "./List.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import AnimatedNum from "./components/AnimatedNum";
import DeleteAllBtn from "./components/Buttons/DeleteAllBtn";

export default function App() {
  const [expenseData, setExpenseData] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [moneyValue, setMoneyValue] = useState("");
  const [totalExpense, setTotalExpense] = useState(0);
  const [activeColorClass, setActiveColorClass] = useState("");

  const handleAddClick = () => {
    setActiveColorClass("addColor");
  };

  const handleClick = (id) => {
    let newExpenseData = expenseData.filter((data) => data.id !== id);
    setExpenseData(newExpenseData);
  };

  const handleDeleteAll = () => {
    setExpenseData([]);
  };

  const handleChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleChange2 = (e) => {
    setMoneyValue(e.target.value); //e.target.value의 value값은 변수명이 아니라 진짜 데이터의 속성값
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newExpense = {
      id: Date.now(),
      title: nameValue,
      money: parseInt(moneyValue),
    };

    setExpenseData((prev) => [...prev, newExpense]);
    setNameValue("");
    setMoneyValue("");
  };

  useEffect(() => {
    const newTotalExpense = expenseData.reduce(
      (sum, expense) => sum + Number(expense.money),
      0
    );
    setTotalExpense(newTotalExpense);
  }, [expenseData]); // 의존성 배열에 expenseData를 넣어주어 expenseData가 변경될 때마다 이 effect가 실행되도록 합니다.

  return (
    <div>
      <Header activeColorClass={activeColorClass} />
      <div className="body">
        <div className="body_inner">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            nameValue={nameValue}
            handleChange2={handleChange2}
            moneyValue={moneyValue}
            handleAddClick={handleAddClick}
          />
          <List expenseData={expenseData} handleClick={handleClick} />
          <DeleteAllBtn handleDeleteAll={handleDeleteAll} />
        </div>
        <div className="body_inner2">
          <div className="body_inner2_total">
            <div className="total_name">TOTAL : </div>
            <div className="total_expense">
              <AnimatedNum totalExpense={totalExpense} /> 원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
