import {
  FETCH_CATS_PENDING,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_ERROR,
  DELETE_FAVOURITE_SUCCESS,
  SET_FAVOURITE_SUCCESS,
  DOWNVOTE_CAT_SUCCESS,
  UPVOTE_CAT_SUCCESS
} from '../../actions';

import {
  addCatFavourite,
  getFormattedCats,
  removeCatFavourite
} from './selectors';

import reduceReducers from 'reduce-reducers';
import { uploadCatReducer } from './reducedReducers';
import { addCatVote, removeCatVote } from './selectors/add-remove-cat-vote';

const initialState = {
  data: [],
  loading: false,
  error: null,
  uploadComplete: false,
  isUploading: false
};

let catDataReducer = function (state, action) {
  switch (action.type) {
    case FETCH_CATS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        uploadComplete: false
      };
    case FETCH_CATS_SUCCESS:
      const { cats, favourites, votes } = action.payload;
      return {
        ...state,
        data: getFormattedCats(cats, favourites, votes),
        loading: false
      };
    case FETCH_CATS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case DELETE_FAVOURITE_SUCCESS:
      return {
        ...state,
        data: removeCatFavourite(action.payload, state.data)
      };
    case SET_FAVOURITE_SUCCESS:
      return {
        ...state,
        data: addCatFavourite(action.payload, state.data)
      };

    case DOWNVOTE_CAT_SUCCESS:
      return {
        ...state,
        data: removeCatVote(action.payload, state.data)
      };

    case UPVOTE_CAT_SUCCESS:
      return {
        ...state,
        data: addCatVote(action.payload, state.data)
      };
    default:
      return state;
  }
};

export const catReducer = reduceReducers(
  initialState,
  catDataReducer,
  uploadCatReducer
);

export const getCats = state => state.cats?.data;
export const catsLoading = state => state.cats?.loading;
export const catsError = state => state.cats?.error;
export const catsUploading = state => state.cats?.uploading;
export const catsUploadComplete = state => state.cats?.uploadComplete;
