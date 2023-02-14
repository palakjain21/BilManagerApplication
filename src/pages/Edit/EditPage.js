import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addBill, updatedBill } from "../../redux/actions/bills";
import { toast } from "react-toastify";
import { generateId } from "../../utils/Id";
import { useLocation, useNavigate} from "react-router-dom";

export default function EditBill() {
  const [billDescription, setBillDescription] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [billDate, setBillDate] = useState("");
  const [billCategory, setBillCategory] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate= useNavigate();

  const createBill = (e) => {
    e.preventDefault();
    // if (
    //   billDescription === "" ||
    //   billAmount === 0 ||
    //   billDate === "" ||
    //   billCategory === ""
    // ) {
    //   alert("Please fill all the fields");
    //   return;
    // }
    let bill = {
      id: location.state.id,
      description: billDescription,
      amount: Number(billAmount),
      date: billDate,
      category: billCategory,
    };
    // localStorage.setItem("bills", JSON.stringify(bill));
    console.log(bill);
    dispatch(updatedBill(bill));
    toast.success("Bill Edited Successfully");
    navigate("/allBills");
  };
  useEffect(() => {
    setBillDescription(location.state.description);
    setBillAmount(location.state.amount);
    setBillDate(location.state.date);
    setBillCategory(location.state.category);
  }, []);

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
                    defaultValue={location.state.description}
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
                    defaultValue={location.state.amount}
                  />
                  <MDBInput
                    label="Bill Due Date"
                    icon="lock"
                    type="date"
                    required
                    onChange={(e) => {
                      setBillDate(e.target.value);
                    }}
                    defaultValue={location.state.date}
                  />
                  <select
                    className="form-select customWidth"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setBillCategory(e.target.value);
                    }}
                    defaultChecked={location.state.category}
                  >
                    <option value={location.state.category}>
                      {location.state.category}
                    </option>
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
