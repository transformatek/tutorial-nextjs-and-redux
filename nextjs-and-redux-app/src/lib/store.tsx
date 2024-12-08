import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./features/contact/contactSlice";

// reducers

export const makeStore = () => {
  return configureStore({
    reducer: {
     contact: contactSlice

    },
   
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


