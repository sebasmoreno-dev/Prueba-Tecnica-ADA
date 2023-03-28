import React from "react";

import { Card } from "primereact/card";

import { TicketsI } from "../interfaces/tickectInterface";
import { SidebarTickets } from "./SidebarTickets";

const CardTickets = ({
  id,
  origin,
  destination,
  numberOfPassangers,
  date,
}: TicketsI) => {


  

  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <SidebarTickets date={date} numberOfPassangers={numberOfPassangers} origin={origin} destination={destination} id={id}/>

    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={`${origin} - ${destination}`}
        subTitle="VIP"
        footer={footer}
        header={header}
        className="md:w-25rem "
      >
        <p className="m-0">
          "Conectando las regiones de Colombia, acercando corazones y cumpliendo
          sueños, viajando siempre juntos en cada camino y llegando con
          seguridad y puntualidad a cada destino."
        </p>
      </Card>
    </div>
  );
};

export default CardTickets;
