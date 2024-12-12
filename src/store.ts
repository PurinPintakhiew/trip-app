import { configureStore } from "@reduxjs/toolkit";
import tripSlice, { TripSliceStateProps } from "./reducers/tripSlice";

export interface ReducerSelectorProps {
  trip: TripSliceStateProps;
}

const store = configureStore({
  reducer: {
    trip: tripSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
