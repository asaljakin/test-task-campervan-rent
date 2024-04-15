import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65f07a6cda8c6584131bdea0.mockapi.io';

export const getAllCampers = createAsyncThunk(
  'get/campers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (error) {
      // console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
