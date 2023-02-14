import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import store from "../../redux/store";
import "./AllBill.css";
import { useNavigate } from "react-router-dom";

export default function AllBillPage() {
  //   useEffect(() => {
  //     console.log("All Bills");
  //     console.log(localStorage.getItem("bills"));
  //   }, []);
  const bills = useSelector((state) => state.bills.billList);
  //   const bills = store.getState();

  useEffect(() => {
    console.log(bills);
  }, [bills]);

  const navigation = useNavigate();
  const handleNavigate = () => {
    navigation("/new");
  };

  return (
    <div>
      {bills && bills.length ? <Table data={bills} /> : <></>}
      {/* <div className="d-grid gap-2">
        <button className="btn btn-light" type="button">
          Total Amount:
        </button>
      </div> */}

      <div className="d-flex justify-content-center w-100">
        <button
          className="btn btn-info btnWidth"
          type="button"
          onClick={handleNavigate}
        >
          Create New Bill
        </button>
      </div>
    </div>
  );
}
