import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchTrips = createAsyncThunk(
  "trips/fetchTrips",
  async (q: any) => {
    const response = await axios.get(apiUrl);

    if (q) {
      response.data = response.data.filter(
        (trip: any) =>
          trip.title.toLowerCase().includes(q.toLowerCase()) ||
          trip.description.toLowerCase().includes(q.toLowerCase()) ||
          trip.tags.some((tag: any) =>
            tag.toLowerCase().includes(q.toLowerCase())
          )
      );
    }

    return response.data;
  }
);

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
