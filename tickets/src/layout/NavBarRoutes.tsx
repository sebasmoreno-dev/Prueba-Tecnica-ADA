import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarRoutes.scss";

export const NavBarRoutes = () => {
  return (
    <div className="nav">

      <NavLink to="/reservation" className="title-nav">
        {/* <h5>Reservation Tickets</h5> */}
        Reservation Tickets
      </NavLink>
      <NavLink to="/tickets" className="title-nav mr-5">
        {/* <h5>Get Ticket</h5> */}
        Ticket List
      </NavLink>
    </div>
  );
};
