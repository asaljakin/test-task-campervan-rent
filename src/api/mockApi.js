import axios from 'axios';

axios.defaults.baseURL = 'https://65f07a6cda8c6584131bdea0.mockapi.io';

export const getCampers = async curPage => {
  const axiosParams = {
    page: curPage,
    limit: 4,
  };
  const { data } = await axios.get('/adverts', { params: axiosParams });
  return data;
};

// export const getAllCampers = async () => {
//     try {
//       const { data } = await axios.get('/adverts');
//       return data.length;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
