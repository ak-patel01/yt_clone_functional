import { configureStore } from "@reduxjs/toolkit";
import { LiveSlice, SearchSlice } from "./HomeSlice";

export const store = configureStore({
    reducer:{
        search: SearchSlice.reducer,
        live: LiveSlice.reducer,
    },
});