import { Navigate, Route, Routes } from "react-router-dom";
import { NavBarRoutes } from "../layout/NavBarRoutes";
import ListTickets from "../pages/ListTickets";
import ReservationTickets from "../pages/ReservationTickets";

export const AppRouter = () => {
  return (
    <div>
      <NavBarRoutes />

      <Routes>
        <Route path="/" element={<Navigate to="/tickets" />} />

        <Route path="/tickets/*" element={<ListTickets />} />
        <Route path="/reservation" element={<ReservationTickets />} />
      </Routes>
    </div>
  );
};
