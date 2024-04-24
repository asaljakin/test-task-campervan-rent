import axios from 'axios';

axios.defaults.baseURL = 'https://65f07a6cda8c6584131bdea0.mockapi.io';

export const getCampers = async curPage => {
  const axiosParams = {
    page: curPage,
    limit: 4,
  };
  const data = await axios.get('/adverts', { params: axiosParams });
  console.log('data ', data);
  return data.data;
};

export const getAllCampers = async () => {
  const { data } = await axios.get('/adverts');
  return data.length;
};
