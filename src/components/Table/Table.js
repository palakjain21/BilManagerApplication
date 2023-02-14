import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { deleteBill } from "../../redux/actions/bills";
import EditBill from "../../pages/Edit/EditPage";
import { useNavigate } from "react-router-dom";
import "./Table.css";

export default function Table({ data }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [categoryCheck, setCategoryCheck] = useState("All categories");
  const [filterData, setFilterData] = useState(data);
  // const [filteredData, setFilteredData] = useState([]);

  const handleDelete = (item) => {
    console.log(item);
    dispatch(deleteBill(item));
  };
  useEffect(() => {
    if (data && data.length) {
      const categoryMap = {};
      const categories = [];
      data.forEach((item) => {
        if (!categoryMap[item.category]) {
          categoryMap[item.category] = true;
          categories.push(item.category);
        }
      });
      setCategories(categories);
    }
  }, [data]);

  useEffect(() => {
    console.log(categories, "CAT");
  }, [categories]);
  const navigation = useNavigate();
  const handleEdit = (item) => {
    console.log(item);
    navigation("/edit", {
      state: {
        id: item.id,
        description: item.description,
        category: item.category,
        amount: item.amount,
        date: item.date,
      },
    });
  };

  const filteredData = (value) => {
    console.log(value);
    console.log(filterData);
    if (value === "All categories") {
      setFilterData(data);
    } else {
      // return filterData.filter((item) => item.category === value);
      console.log(filterData.filter((item) => item.category === value));
      setFilterData(filterData.filter((item) => item.category === value));
    }
  };

  return (
    <div className="d-flex flex-column align-items-start">
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filterData.map((item) => (
            <tr>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </MDBBtn>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <div className="d-flex justify-content-end w-100">
        <select
          className="form-select customSelectWidth"
          aria-label="Default select example"
          // onChange={(e) => {
          //   setCategoryCheck(e.target.value);
          // }}
          onChange={(e) => filteredData(e.target.value)}
        >
          <option value="All categories">All categories</option>
          {categories.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
