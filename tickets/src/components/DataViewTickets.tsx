import CardTickets from "./CardTickets";

import { DataView } from "primereact/dataview";

import { TicketsI } from "../interfaces/tickectInterface";
import { useAppSelector } from "../app/hook";

const DataViewTickets = () => {

  const { ticketsListStorage } = useAppSelector((state) => state.tickets);
  

  const gridItem = (data: TicketsI) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <CardTickets key={data.id} {...data} />
      </div>
    );
  };

  const itemTemplate = (data: TicketsI) => {
    return gridItem(data);
  };

  const renderHeader = () => {
    return (
      <div className="">
        <div
          className="flex align-items-center"
          style={{ textAlign: "left" }}
        ></div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card h-15rem">
      <DataView value={ticketsListStorage} itemTemplate={itemTemplate} header={header} />
    </div>
  );
};

export default DataViewTickets;
