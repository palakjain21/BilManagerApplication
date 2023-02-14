import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Navbar from "./components/Navbar/Navbar";
import CreateNewBill from "./pages/Create/CreateNewBill";
import AllBillPage from "./pages/AllBill/AllBill";
import { ToastContainer } from "react-toastify";
import EditBill from "./pages/Edit/EditPage";
import { useDispatch } from "react-redux";
import { GET_BILLS_START } from "./redux/action-types/bills";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
  dispatch({ type: GET_BILLS_START });
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/new" element={<CreateNewBill />} />
          <Route path="/allBills" element={<AllBillPage />} />
          <Route path="/edit" element={<EditBill />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
