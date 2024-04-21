import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65f07a6cda8c6584131bdea0.mockapi.io';

export const getCampers = createAsyncThunk(
  'get/campers',
  async (curPage, thunkAPI) => {
    const axiosParams = {
      page: curPage,
      limit: 4,
    };
    try {
      const { data } = await axios.get('/adverts', { params: axiosParams });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCampers = createAsyncThunk(
  'get/campers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return data.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
