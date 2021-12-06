import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export let navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.origin = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export let { setDestination, setOrigin, setTravelTimeInformation } =
  navSlice.actions;

export let selectOrigin = (state) => state.nav.origin;
export let selectDestination = (state) => state.nav.destination;
export let selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

  export default navSlice.reducer