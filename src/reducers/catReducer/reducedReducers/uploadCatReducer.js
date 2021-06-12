import {
  UPLOAD_CAT_PENDING,
  UPLOAD_CAT_SUCCESS,
  UPLOAD_CAT_ERROR
} from '../../../actions';

export const uploadCatReducer = (state, action) => {
  switch (action.type) {
    case UPLOAD_CAT_PENDING:
      return {
        ...state,
        uploading: true,
        uploadComplete: false,
        error: null
      };
    case UPLOAD_CAT_SUCCESS:
      return {
        ...state,
        uploading: false,
        uploadComplete: true
      };
    case UPLOAD_CAT_ERROR:
      return {
        ...state,
        uploading: false,
        error: action.error
      };
    default:
      return state;
  }
};
