// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// };
// const slice = createSlice({
//   name: "fetchCars",
//   initialState,
//   reducers: {
//     fetchStarted(state) {
//       state.loading = true;
//     },
//     fetchSuccess(state, action) {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = null;
//     },
//     fetchError(state, action) {
//       state.loading = false;
//       state.data = null;
//       state.error = action.payload;
//     },
//   },
// });
// const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

// export const fetchCars = () => async (dispatch) => {
//   try {
//     dispatch(fetchStarted());
//     const response = await fetch(
//       "https://mocki.io/v1/da2bc9c4-3cdc-48cb-8731-ab4fa6b2afad"
//     );
//     const data = await response.json();
//     dispatch(fetchSuccess(data));
//   } catch (error) {
//     dispatch(fetchError(error.message));
//   }
// };

// export default slice.reducer;
