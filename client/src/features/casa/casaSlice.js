import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import casaService from "./casaService";

const initialState = {
  atividadesCasa: [],
  atividadeCasa: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  register: {
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
  update: {
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
  remove: {
    isSuccess: false,
    isLoading: false,
    isError: false,
  },

  message: "",
};

export const setNewAtividadeCasa = createAsyncThunk(
  "atividadeCasa/set",
  async (data, thunkAPI) => {
    try {
      const response = await casaService.setNewAtividadeCasa(data);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const casaSlice = createSlice({
  name: "casaSlice",
  initialState,
  reducers: {
    resetRegister(state) {
      state.register.isSuccess = false;
      state.register.isLoading = false;
      state.register.isError = false;
    },
    resetUpdate(state) {
      state.update.isSuccess = false;
      state.update.isLoading = false;
      state.update.isError = false;
    },
    resetRemove(state) {
      state.remove.isSuccess = false;
      state.remove.isLoading = false;
      state.remove.isError = false;
    },
    reset(state) {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setNewAtividadeCasa.pending, (state) => {
        state.register.isLoading = true;
      })
      .addCase(setNewAtividadeCasa.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = false;
        state.register.isSuccess = true;
        state.atividadeCasa = action.payload.atividadeCasa;
        state.atividadesCasa.unshift(state.atividadeCasa);
      })
      .addCase(setNewAtividadeCasa.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isSuccess = false;
        state.register.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetRegister, resetRemove, resetUpdate } =
  casaSlice.actions;

export default casaSlice.reducer;
