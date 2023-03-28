import { Button } from "primereact/button";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { TicketsI } from "../interfaces/tickectInterface";

export const SidebarTickets = ({
  id,
  origin,
  destination,
  numberOfPassangers,
  date,
}: TicketsI) => {
  const [visibleRight, setVisibleRight] = useState(false);

  const dateStr = date;
  const date2 = new Date(dateStr);
  const formattedDate = date2.toLocaleString(); // muestra la fecha y hora en formato local

  return (
    <div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        style={{ width: "25rem" }}
      >
        <h2
          style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "start" }}
        >
          {origin} - {destination}
        </h2>

        <p className="project-description">
          "Un viaje cómodo, un destino feliz"
        </p>

        <div className="flex flex-column justify-content-between gap-2">
          <div className="flex align-items-center">
            <h3 className="mr-2 font-medium">Numero de Pasajeros</h3>
            <p>{numberOfPassangers}</p>
          </div>

          <div className="flex align-items-center">
            <h3 className="mr-2 font-medium">Fecha / Hora:</h3>
            <p>{formattedDate}</p>
          </div>
        </div>

        <p className="project-description">
          "En nuestro servicio de bus intermunicipal, te ofrecemos más que un
          transporte, te ofrecemos un puente que conecta las regiones de
          Colombia, para que puedas descubrir la diversidad de nuestro país y
          sentirte cerca de su gente."
        </p>
      </Sidebar>

      <Button
        className="mr-2"
        label="Ver Detalle"
        icon="pi pi-search"
        //loading={isLoading}
        onClick={() => setVisibleRight(true)}
      />
    </div>
  );
};
