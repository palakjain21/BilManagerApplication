import { ADD_BILL, DELETE_BILL, UPDATE_BILL } from "../action-types/bills";

const initialState = {
  billList: [],
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BILLS": {
      return {
        ...state,
        billList: action.bills,
      };
    }
    case ADD_BILL: {
      return {
        ...state,
        billList: [...state.billList, action.data],
      };
    }
    case DELETE_BILL: {      
      return {
        ...state,
        billList: action.data,
      };
    }
    case UPDATE_BILL: {
      return {
        ...state,
        billList: action.data,
      };
    }

    default:
      return state;
  }
};
