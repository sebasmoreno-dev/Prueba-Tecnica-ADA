/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { Toast } from "primereact/toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { TicketsI } from "../interfaces/tickectInterface";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  setAddedTicket,
  setTickets,
  setTicketsStorage,
} from "../redux/slice/ticketsSlice";

const FormTickets = () => {
  const { id, ticketsList, addedTicket } = useAppSelector(
    (state) => state.tickets
  );
  const dispatch = useAppDispatch();

  //Guardar la info en el local storage
  useEffect(() => {
    if (ticketsList) {
      localStorage.setItem("tickets", JSON.stringify(ticketsList));
    }
  }, [ticketsList]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    dispatch(setTicketsStorage(savedTickets));
  }, [ticketsList]);

  const schema = yup
    .object({
      origin: yup
        .string()
        .required("origin is required")
        .min(4, "min 4")
        .max(15, "max 15"),
      destination: yup
        .string()
        .required("destination is required")
        .min(4, "min 4")
        .max(15, "max 15"),
      numberOfPassangers: yup
        .string()
        // QUE SOLO PERMITA NUMEROS
        .matches(/^[0-9]*$/, "Number of Passangers must be only numeric")

        .required("number of passangers is required")
        .min(1, "min 1")
        .max(10, "max 10"),
      date: yup.date().required("date is required").min(new Date(), "min date"),
    })
    .required();

  const toast = useRef<Toast>(null);

  const show = () => {
    toast.current?.show({
      severity: "success",
      summary: "Form Submitted",
      detail: "Ticket Created",
    });
  };

  useEffect(() => {
    if (addedTicket) {
      setTimeout(() => {
        show();
      }, 2000);
    }
  }, [addedTicket]);

  /* const defaultValues = {
    value: "",
  }; */

  const {
    control,
    register,
    watch,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<TicketsI>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  watch("date");

  const onSubmit = (data: TicketsI) => {
    let newData = {
      ...data,
      id: id,
    };

    dispatch(setAddedTicket());

    setTimeout(() => {
      dispatch(setTickets(newData));
      reset();
    }, 2000);
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <div>
        <h2 className="">Get Tickets</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 flex flex-column">
            <label htmlFor="origin" className="mb-2">
              Origin
            </label>
            <InputText
              id="origin"
              {...register("origin")}
              placeholder="Origin"
            />
            <small className="errors text-red-600 text-sm mt-1 ml-1">
              {errors.origin?.message}
            </small>
          </div>

          <div className="mt-4 flex flex-column">
            <label htmlFor="destination" className="mb-2">
              Destination
            </label>
            <InputText
              id="destination"
              {...register("destination")}
              placeholder="Destination"
            />
            <small className="errors text-red-600 text-sm mt-1 ml-1">
              {errors.destination?.message}
            </small>
          </div>

          <div className="mt-4 flex flex-column">
            <label htmlFor="numberOfPassangers" className="mb-2">
              Number Of Passangers
            </label>
            <InputText
              id="numberOfPassangers"
              {...register("numberOfPassangers")}
              placeholder="Passangers"
            />
            <small className="errors text-red-600 text-sm mt-1 ml-1">
              {errors.numberOfPassangers?.message}
            </small>
          </div>

          <div className="mt-4 flex flex-column">
            <label htmlFor="date" className="mb-2">
              Date / Time
            </label>
            <Calendar
              id="date"
              placeholder="Date"
              {...register("date")}
              showTime
              hourFormat="12"
            />
            <small className="errors text-red-600 text-sm mt-1 ml-1">
              {errors.date?.message}
            </small>
          </div>

          {addedTicket ? (
            <Button
              type="submit"
              disabled={true}
              icon="pi pi-check"
              label="Processing..."
              iconPos="right"
              className="mt-5"
            />
          ) : (
            <Button
              type="submit"
              disabled={false}
              icon="pi pi-check"
              label="Send"
              iconPos="right"
              className="mt-5"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default FormTickets;
