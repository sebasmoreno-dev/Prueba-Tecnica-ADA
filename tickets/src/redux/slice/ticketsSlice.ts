import { createSlice } from '@reduxjs/toolkit';
import { TicketsI } from '../../interfaces/tickectInterface';

type InitialState = {
    ticketsList: TicketsI[];
    ticketsListStorage: TicketsI[];
    addedTicket: boolean;
    id: number;
}

const initialState: InitialState = {
    ticketsList: [],
    ticketsListStorage: [],
    addedTicket: false,
    id: 1
}


export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets: (state, action) => {
            const ticket = {
                ...action.payload,
                date: new Date(action.payload.date),
            };
            state.ticketsList = [...state.ticketsList, ticket];
            //state.addedTicket = false;
            state.id = state.id + 1;
        },

        setTicketsStorage: (state, action) => {
            state.ticketsListStorage = action.payload;
            state.addedTicket = false;
            state.id = state.id + 1;
        },

        setAddedTicket: (state) => {
            state.addedTicket = true;
        },

    }



});


// Action creators are generated for each case reducer function
export const { setTickets, setAddedTicket, setTicketsStorage } = ticketsSlice.actions;
export const ticketsReducer = ticketsSlice.reducer;