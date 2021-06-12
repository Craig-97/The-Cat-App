import reduceReducers from 'reduce-reducers';
import { downvoteReducer, upvoteReducer } from './reducedReducers';

const initialState = {
  error: null,
  upvoting: false,
  downvoting: false
};

export const voteReducer = reduceReducers(
  initialState,
  upvoteReducer,
  downvoteReducer
);

export const upvotingStatus = state => state.votes?.upvoting;
export const downvotingStatus = state => state.votes?.downvoting;
export const votesError = state => state.votes?.error;
