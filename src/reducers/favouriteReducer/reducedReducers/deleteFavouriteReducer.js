import {
  DELETE_FAVOURITE_PENDING,
  DELETE_FAVOURITE_SUCCESS,
  DELETE_FAVOURITE_ERROR
} from '../../../actions';

export const deleteFavouriteReducer = (state, action) => {
  switch (action.type) {
    case DELETE_FAVOURITE_PENDING:
      return {
        ...state,
        deleting: true,
        error: null
      };
    case DELETE_FAVOURITE_SUCCESS:
      return {
        ...state,
        deleting: false
      };
    case DELETE_FAVOURITE_ERROR:
      return {
        ...state,
        deleting: false,
        error: action.error
      };
    default:
      return state;
  }
};
