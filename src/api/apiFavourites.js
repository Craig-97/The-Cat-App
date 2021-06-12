import { apiDELETE, apiPOST } from './apiHelper';
import { DEFAULT_HEADERS } from './constants';

import {
  setFavouritePending,
  setFavouriteSuccess,
  setFavouriteError,
  deleteFavouritePending,
  deleteFavouriteSuccess,
  deleteFavouriteError
} from '../actions';

export const setFavourite = id => dispatch => {
  const variables = {
    image_id: id
  };

  apiPOST(
    dispatch,
    setFavouritePending,
    setFavouriteSuccess,
    setFavouriteError,
    'favourites',
    variables,
    DEFAULT_HEADERS
  );
};

export const deleteFavourite = id => dispatch => {
  apiDELETE(
    dispatch,
    deleteFavouritePending,
    deleteFavouriteSuccess,
    deleteFavouriteError,
    'favourites',
    id,
    DEFAULT_HEADERS
  );
};
