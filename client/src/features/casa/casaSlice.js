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
  "atividadeCasa/post",
  async (data, thunkAPI) => {
    try {
      return await casaService.setNewAtividadeCasa(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllAtividadesCasa = createAsyncThunk(
  "atividadesCasa/getAll",
  async (thunkAPI) => {
    try {
      return await casaService.getAllAtividadesCasa();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleAtividade = createAsyncThunk(
  "atividadesCasa/singleAtividade",
  async (id, thunkAPI) => {
    try {
      return await casaService.getSingleAtividade(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const removeSingleAtividde = createAsyncThunk(
  "atividadesCasa/remove",
  async (id, thunkAPI) => {
    try {
      return await casaService.removeSingleAtividade(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
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
        state.atividadeCasa = action.payload;
        state.atividadesCasa.unshift(state.atividadeCasa);
      })
      .addCase(setNewAtividadeCasa.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isSuccess = false;
        state.register.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllAtividadesCasa.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllAtividadesCasa.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.atividadesCasa = action.payload;
      })
      .addCase(getAllAtividadesCasa.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getSingleAtividade.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSingleAtividade.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.atividadeCasa = action.payload;
      })
      .addCase(getSingleAtividade.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeSingleAtividde.pending, (state) => {
        state.remove.isLoading = true;
        state.remove.isError = false;
        state.remove.isSuccess = false;
      })
      .addCase(removeSingleAtividde.fulfilled, (state, action) => {
        state.remove.isLoading = false;
        state.remove.isError = false;
        state.remove.isSuccess = true;
        state.atividadesCasa = state.atividadesCasa.filter(
          (atividade) => atividade._id !== action.payload._id
        );
      })
      .addCase(removeSingleAtividde.rejected, (state, action) => {
        state.remove.isLoading = false;
        state.remove.isSuccess = false;
        state.remove.isError = true;
      });
  },
});

export const { reset, resetRegister, resetRemove, resetUpdate } =
  casaSlice.actions;

export default casaSlice.reducer;
