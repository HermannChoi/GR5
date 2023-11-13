import React, { useState, useEffect, useRef } from "react";
import "./components/CSS/App.css";
import "./components/CSS/Header.css";
import "./components/CSS/AddSpace.css";
import "./components/CSS/List.css";
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
  const [headerName, setHeaderName] = useState("Budget Calculator");
  const [submitBtnValue, setSubmitBtnValue] = useState("add");
  const [editTarget, setEditTarget] = useState("");

  const firstInputRef = useRef(null); // submit하면 다시 첫번째 input에 focus하게

  const handleClick = (id) => {
    let newExpenseData = expenseData.filter((data) => data.id !== id);
    setExpenseData(newExpenseData);

    setActiveColorClass("deleteColor");
    setHeaderName("삭제되었습니다.");
    setTimeout(() => {
      setActiveColorClass("");
      setHeaderName("Budget Calculator");
    }, 2500);
  };

  const handleDeleteAll = () => {
    setExpenseData([]);

    setActiveColorClass("deleteAllColor");
    setHeaderName("모두 삭제되었습니다.");
    setTimeout(() => {
      setActiveColorClass("");
      setHeaderName("Budget Calculator");
    }, 2500);
  };

  const handleEditClick = (data) => {
    const dataToEdit = data.title;
    setNameValue(dataToEdit);
    const dataToEdit2 = data.money;
    setMoneyValue(dataToEdit2);
    setSubmitBtnValue("edit");
  };

  const handleChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleChange2 = (e) => {
    setMoneyValue(e.target.value); //e.target.value의 value값은 변수명이 아니라 진짜 데이터의 속성값
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitBtnValue === "add") {
      let newExpense = {
        id: Date.now(),
        title: nameValue,
        money: parseInt(moneyValue),
      };

      setActiveColorClass("addColor");
      setHeaderName("추가되었습니다.");
      setTimeout(() => {
        setActiveColorClass("");
        setHeaderName("Budget Calculator");
      }, 2500);

      setExpenseData((prev) => [...prev, newExpense]);
      setNameValue("");
      setMoneyValue("");

      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    } else {
      const updatedList = expenseData.map((item) => {
        if (editTarget.id === item.id) {
          return { ...item, title: nameValue, money: moneyValue };
        }
        return item;
      });
      setExpenseData(updatedList);
      setSubmitBtnValue("add");

      setActiveColorClass("editColor");
      setHeaderName("수정되었습니다.");
      setTimeout(() => {
        setActiveColorClass("");
        setHeaderName("Budget Calculator");
      }, 2500);

      setNameValue("");
      setMoneyValue("");

      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }
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
      <Header headerName={headerName} activeColorClass={activeColorClass} />
      <div className="body">
        <div className="body_inner">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            nameValue={nameValue}
            handleChange2={handleChange2}
            moneyValue={moneyValue}
            firstInputRef={firstInputRef}
            submitBtnValue={submitBtnValue}
          />
          <List
            expenseData={expenseData}
            handleClick={handleClick}
            handleEditClick={handleEditClick}
            setEditTarget={setEditTarget}
          />
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
      <footer className="footer">You can make it, bro. Don't give up</footer>
    </div>
  );
}
