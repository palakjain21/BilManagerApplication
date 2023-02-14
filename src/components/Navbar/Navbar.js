import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="info">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" className="customFontSize">
          BillManager
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              {/* <MDBNavbarLink aria-current="page" href="/">
                Dashboard
              </MDBNavbarLink> */}
              <Link to="/" className="customNavItem">
                Dashboard
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/new" className="customNavItem">
                Create New Bill
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/allBills" className="customNavItem">
                All Bills
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
