import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./redux/employeeSlice";
import tabReducer from "./redux/tabSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    tab: tabReducer
  },
});

export default store;
