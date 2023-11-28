import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import lazerService from "./lazerService";

const initialState = {
  atividadesLazer: [],
  atividadeLazer: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  openModalLazer: false,
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

export const getAllAtividadesLazer = createAsyncThunk(
  "atividadesLazer/get",
  async (thunkAPI) => {
    try {
      return await lazerService.getAllAtividadesLazer();
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

export const setNewAtividadeLazer = createAsyncThunk(
  "atividadesLazer/post",
  async (data, thunkAPI) => {
    try {
      return await lazerService.setNewAtividadeLazer(data);
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

export const getSingleAtividadeLazer = createAsyncThunk(
  "atividadesLazer/getId",
  async (id, thunkAPI) => {
    try {
      return await lazerService.getSingleAtividadeLazer(id);
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

export const removeSingleAtividadeLazer = createAsyncThunk(
  "atividadesLazer/delete",
  async (id, thunkAPI) => {
    try {
      return await lazerService.removeSingleAtividadeLazer(id);
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

export const lazerSlice = createSlice({
  name: "lazerSlice",
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
    setOpenModalLazer(state) {
      state.openModalLazer = true;
    },
    closeModalLazer(state) {
      state.openModalLazer = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setNewAtividadeLazer.pending, (state) => {
        state.register.isLoading = true;
      })
      .addCase(setNewAtividadeLazer.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = false;
        state.register.isSuccess = true;
        state.atividadeLazer = action.payload;
        state.atividadesLazer.unshift(state.atividadeLazer);
      })
      .addCase(setNewAtividadeLazer.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isSuccess = false;
        state.register.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllAtividadesLazer.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllAtividadesLazer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.atividadesLazer = action.payload;
      })
      .addCase(getAllAtividadesLazer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getSingleAtividadeLazer.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSingleAtividadeLazer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.atividadeLazer = action.payload;
      })
      .addCase(getSingleAtividadeLazer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeSingleAtividadeLazer.pending, (state) => {
        state.remove.isLoading = true;
        state.remove.isError = false;
        state.remove.isSuccess = false;
      })
      .addCase(removeSingleAtividadeLazer.fulfilled, (state, action) => {
        state.remove.isLoading = false;
        state.remove.isError = false;
        state.remove.isSuccess = true;
        state.atividadesLazer = state.atividadesLazer.filter(
          (atividade) => atividade._id !== action.payload._id
        );
      })
      .addCase(removeSingleAtividadeLazer.rejected, (state, action) => {
        state.remove.isLoading = false;
        state.remove.isSuccess = false;
        state.remove.isError = true;
      });
  },
});

export const {
  reset,
  resetRegister,
  resetRemove,
  resetUpdate,
  setOpenModalLazer,
  closeModalLazer,
} = lazerSlice.actions;

export default lazerSlice.reducer;
