import { configureStore } from "@reduxjs/toolkit";
import groupHealthReducer from "./slices/groupHealthSlice";

export const store = configureStore( {
    reducer: {
        groupHealth: groupHealthReducer
    }
} );
