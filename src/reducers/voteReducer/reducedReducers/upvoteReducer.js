import {
  UPVOTE_CAT_PENDING,
  UPVOTE_CAT_SUCCESS,
  UPVOTE_CAT_ERROR
} from '../../../actions';

export const upvoteReducer = (state, action) => {
  switch (action.type) {
    case UPVOTE_CAT_PENDING:
      return {
        ...state,
        upvoting: true,
        error: null
      };
    case UPVOTE_CAT_SUCCESS:
      return {
        ...state,
        upvoting: false
      };
    case UPVOTE_CAT_ERROR:
      return {
        ...state,
        upvoting: false,
        error: action.error
      };
    default:
      return state;
  }
};
