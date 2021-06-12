import {
  DOWNVOTE_CAT_PENDING,
  DOWNVOTE_CAT_SUCCESS,
  DOWNVOTE_CAT_ERROR
} from '../../../actions';

export const downvoteReducer = (state, action) => {
  switch (action.type) {
    case DOWNVOTE_CAT_PENDING:
      return {
        ...state,
        downvoting: true,
        error: null
      };
    case DOWNVOTE_CAT_SUCCESS:
      return {
        ...state,
        downvoting: false
      };
    case DOWNVOTE_CAT_ERROR:
      return {
        ...state,
        downvoting: false,
        error: action.error
      };
    default:
      return state;
  }
};
