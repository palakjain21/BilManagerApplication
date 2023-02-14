import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Charts from "../../components/Chart/Chart";
import "./DashboardPage.css";
import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
const DashboardPage = () => {
  const bills = useSelector((state) => state.bills.billList);
  //   const bills = store.getState();
  // sort bills by date in ascending order
  bills.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  const MonthlyBudget = 1111;
  const payBills = (bills) => {
    let total = 0;
    let billsArray = [];
    for (let i = 0; i < bills.length; i++) {
      if (total + bills[i].amount > MonthlyBudget) {
        continue;
      }
      billsArray.push(bills[i]);
      total += bills[i].amount;
    }
    return billsArray;
  };
  useEffect(() => {
    console.log(bills);
  }, [bills]);

  return (
    <div className="dashboard">
      <div className="d-flex w-50 justify-content-center">
        <Charts bills={bills} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <h2>Priority Bills</h2>
        <Table data={payBills(bills)} />
      </div>
    </div>
  );
};

export default DashboardPage;
