import {
  SET_FAVOURITE_PENDING,
  SET_FAVOURITE_SUCCESS,
  SET_FAVOURITE_ERROR
} from '../../../actions';

export const setFavouriteReducer = (state, action) => {
  switch (action.type) {
    case SET_FAVOURITE_PENDING:
      return {
        ...state,
        updating: true,
        error: null
      };
    case SET_FAVOURITE_SUCCESS:
      return {
        ...state,
        updating: false
      };
    case SET_FAVOURITE_ERROR:
      return {
        ...state,
        updating: false,
        error: action.error
      };
    default:
      return state;
  }
};
