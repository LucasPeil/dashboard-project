import { configureStore } from "@reduxjs/toolkit";

import casaReducer from "./features/casa/casaSlice";
const store = configureStore({
  reducer: {
    atividadesCasa: casaReducer,
  },
});

export default store;
