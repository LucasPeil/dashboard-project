import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import educacaoService from "./educacaoService";

const initialState = {
  atividadesEducacao: [],
  atividadeEducacao: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  openModalEducacao: false,
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

export const getAllAtividadesEducacao = createAsyncThunk(
  "atividadesEducacao/get",
  async (thunkAPI) => {
    try {
      return await educacaoService.getAllAtividadesEducacao();
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

export const setNewAtividadeEducacao = createAsyncThunk(
  "atividadesEducacao/post",
  async (data, thunkAPI) => {
    try {
      return await educacaoService.setNewAtividadeEducacao(data);
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

export const getSingleAtividadeEducacao = createAsyncThunk(
  "atividadesEducacao/getId",
  async (id, thunkAPI) => {
    try {
      return await educacaoService.getSingleAtividadeEducacao(id);
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

export const removeSingleAtividadeEducacao = createAsyncThunk(
  "atividadesEducacao/delete",
  async (id, thunkAPI) => {
    try {
      return await educacaoService.removeSingleAtividadeEducacao(id);
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

export const educacaoSlice = createSlice({
  name: "educacaoSlice",
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
    setOpenModalEducacao(state) {
      state.openModalEducacao = true;
    },
    closeModalEducacao(state) {
      state.openModalEducacao = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setNewAtividadeEducacao.pending, (state) => {
        state.register.isLoading = true;
      })
      .addCase(setNewAtividadeEducacao.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = false;
        state.register.isSuccess = true;
        state.atividadeEducacao = action.payload;
        state.atividadesEducacao.unshift(state.atividadeEducacao);
      })
      .addCase(setNewAtividadeEducacao.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isSuccess = false;
        state.register.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllAtividadesEducacao.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllAtividadesEducacao.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.atividadesEducacao = action.payload;
      })
      .addCase(getAllAtividadesEducacao.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getSingleAtividadeEducacao.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSingleAtividadeEducacao.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.atividadeEducacao = action.payload;
      })
      .addCase(getSingleAtividadeEducacao.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeSingleAtividadeEducacao.pending, (state) => {
        state.remove.isLoading = true;
        state.remove.isError = false;
        state.remove.isSuccess = false;
      })
      .addCase(removeSingleAtividadeEducacao.fulfilled, (state, action) => {
        state.remove.isLoading = false;
        state.remove.isError = false;
        state.remove.isSuccess = true;
        state.atividadesEducacao = state.atividadesEducacao.filter(
          (atividade) => atividade._id !== action.payload._id
        );
      })
      .addCase(removeSingleAtividadeEducacao.rejected, (state, action) => {
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
  setOpenModalEducacao,
  closeModalEducacao,
} = educacaoSlice.actions;

export default educacaoSlice.reducer;
