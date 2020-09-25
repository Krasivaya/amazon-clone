const { createContext, useContext, useReducer } = require("react")

import React, { createContext, useContext, useReducer} from "react";

import const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}></StateContext.Provider>
)