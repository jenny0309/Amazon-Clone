import React, { createContext, useContext, useReducer } from "react";

// setup data layer
// we need this to track the basket

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
// children <- the component of App on index.js
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)