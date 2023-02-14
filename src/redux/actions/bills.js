import { ADD_BILL, ADD_BILL_START, DELETE_BILL, DELETE_BILL_START, UPDATE_BILL, UPDATE_BILL_START,GET_BILLS_START } from "../action-types/bills";

export const getBills = () => {
  return {
    type: GET_BILLS_START,
  };
};
export const addBill = (data) => {
  console.log(data);
  return {
    type: ADD_BILL_START,
    data,
  };
};

export const deleteBill = (data) => {
  return {
    type: DELETE_BILL_START,
    data,
  };
};

export const updatedBill =(data)=>{
    return{
        type: UPDATE_BILL_START,
        data,
    }
}