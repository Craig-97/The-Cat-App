//POST FAVOURITE
export const SET_FAVOURITE_PENDING = 'SET_FAVOURITE_PENDING';
export const SET_FAVOURITE_SUCCESS = 'SET_FAVOURITE_SUCCESS';
export const SET_FAVOURITE_ERROR = 'SET_FAVOURITE_ERROR';

export const setFavouritePending = () => {
  return {
    type: SET_FAVOURITE_PENDING
  };
};

export const setFavouriteSuccess = (favourite, variables) => {
  return {
    type: SET_FAVOURITE_SUCCESS,
    payload: { favourite, variables }
  };
};

export const setFavouriteError = error => {
  return {
    type: SET_FAVOURITE_ERROR,
    error: { ...error?.data }
  };
};

//DELETE FAVOURITE
export const DELETE_FAVOURITE_PENDING = 'DELETE_FAVOURITE_PENDING';
export const DELETE_FAVOURITE_SUCCESS = 'DELETE_FAVOURITE_SUCCESS';
export const DELETE_FAVOURITE_ERROR = 'DELETE_FAVOURITE_ERROR';

export const deleteFavouritePending = () => {
  return {
    type: DELETE_FAVOURITE_PENDING
  };
};

export const deleteFavouriteSuccess = favourite => {
  return {
    type: DELETE_FAVOURITE_SUCCESS,
    payload: favourite
  };
};

export const deleteFavouriteError = error => {
  return {
    type: DELETE_FAVOURITE_ERROR,
    error: { ...error?.data }
  };
};
