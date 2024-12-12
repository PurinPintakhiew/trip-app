import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:9000";

export const fetchTrips = createAsyncThunk("trips/fetchTrips", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export interface TripSliceStateProps {
  trips: [];
  currentTrip: null;
  loading: false;
  error: null;
}

const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: [],
    currentTrip: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action: any) => action.type.endsWith("/pending"),
        (state: any) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action: any) => action.type.endsWith("/fulfilled"),
        (state: any, action: any) => {
          state.loading = false;
          if (action.type.includes("fetchTrips")) {
            state.trips = action.payload;
          }
        }
      )
      .addMatcher(
        (action: any) => action.type.endsWith("/rejected"),
        (state: any, action: any) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default tripSlice.reducer;
