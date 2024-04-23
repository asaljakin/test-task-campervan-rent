import storage from 'redux-persist/lib/storage';
import { campersReducer } from './thunks';
import persistReducer from 'redux-persist/es/persistReducer';

const persistFavoriteConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorites'],
};
export const reducer = {
  campers: persistReducer(persistFavoriteConfig, campersReducer),
};
