import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./CreateNewBill.css";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addBill } from "../../redux/actions/bills";
import { toast } from "react-toastify";
import { generateId } from "../../utils/Id";
import { useNavigate } from "react-router-dom";

export default function CreateNewBill() {
  const [billDescription, setBillDescription] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [billDate, setBillDate] = useState("");
  const [billCategory, setBillCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createBill = (e) => {
    e.preventDefault();
    if (
      billDescription === "" ||
      billAmount === 0 ||
      billDate === "" ||
      billCategory === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    let bill = {
      id: generateId(),
      description: billDescription,
      amount: Number(billAmount),
      date: billDate,
      category: billCategory,
    };
    // localStorage.setItem("bills", JSON.stringify(bill));
    console.log(bill);
    // dispatch(addBill(bill));
    toast.success("Bill Created Successfully");
    // toast.success("Signed up successfully!!!");
    // navigate("/allBills");
  };

  return (
    <div>
      <div className="d-lg-flex justify-content-center align-items-center flex-lg-column w-100 h-100">
        <MDBContainer className="w-75 mh-100 vh-100 h-100">
          <MDBRow>
            <MDBCol>
              <form className="d-flex flex-column justify-content-center align-items-center customHeight">
                <p className="h4 text-center mb-4">Create New Bill</p>
                <div className="grey-text w-75 d-flex justify-content-evenly align-items-center flex-column h-50">
                  <MDBInput
                    label="Bill Description"
                    icon="user"
                    type="text"
                    error="wrong"
                    success="right"
                    required
                    onChange={(e) => {
                      setBillDescription(e.target.value);
                    }}
                  />
                  <MDBInput
                    label="Bill Amount"
                    icon="envelope"
                    type="number"
                    error="wrong"
                    success="right"
                    required
                    onChange={(e) => {
                      setBillAmount(e.target.value);
                    }}
                  />
                  <MDBInput
                    label="Bill Due Date"
                    icon="lock"
                    type="date"
                    required
                    onChange={(e) => {
                      setBillDate(e.target.value);
                    }}
                  />
                  <select
                    className="form-select customWidth"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setBillCategory(e.target.value);
                    }}
                  >
                    <option>Category</option>
                    <option value="utility">Utility</option>
                    <option value="foodNdining">FoodNDining</option>
                    <option value="travel">Travel</option>
                    <option value="education">Education</option>
                    <option value="shopping">Shopping</option>
                    <option value="personal">Personal</option>
                  </select>
                </div>
                <div className="text-center mt-3">
                  <MDBBtn
                    color="info"
                    onClick={(e) => {
                      createBill(e);
                    }}
                  >
                    Save
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
