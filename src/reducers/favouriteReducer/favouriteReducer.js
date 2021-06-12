import reduceReducers from 'reduce-reducers';
import { setFavouriteReducer, deleteFavouriteReducer } from './reducedReducers';

const initialState = {
  error: null,
  updating: false,
  deleting: false
};

export const favouriteReducer = reduceReducers(
  initialState,
  setFavouriteReducer,
  deleteFavouriteReducer
);

export const favouritesError = state => state.favourites?.error;
export const updatingFavourite = state => state.favourites?.updating;
export const deletingFavourite = state => state.favourites?.deleting;
