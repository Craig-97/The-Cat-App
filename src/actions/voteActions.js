export const FETCH_VOTES_PENDING = 'FETCH_VOTES_PENDING';
export const FETCH_VOTES_SUCCESS = 'FETCH_VOTES_SUCCESS';
export const FETCH_VOTES_ERROR = 'FETCH_VOTES_ERROR';

export const fetchVotesPending = () => {
  return {
    type: FETCH_VOTES_PENDING
  };
};

export const fetchVotesSuccess = Votes => {
  return {
    type: FETCH_VOTES_SUCCESS,
    payload: Votes
  };
};

export const fetchVotesError = error => {
  return {
    type: FETCH_VOTES_ERROR,
    error: error
  };
};

export const UPVOTE_CAT_PENDING = 'UPVOTE_CAT_PENDING';
export const UPVOTE_CAT_SUCCESS = 'UPVOTE_CAT_SUCCESS';
export const UPVOTE_CAT_ERROR = 'UPVOTE_CAT_ERROR';

export const upvoteCatPending = () => {
  return {
    type: UPVOTE_CAT_PENDING
  };
};

export const upvoteCatSuccess = (vote, variables) => {
  return {
    type: UPVOTE_CAT_SUCCESS,
    payload: { vote, variables }
  };
};

export const upvoteCatError = error => {
  return {
    type: UPVOTE_CAT_ERROR,
    error: { ...error?.data }
  };
};

export const DOWNVOTE_CAT_PENDING = 'DOWNVOTE_CAT_PENDING';
export const DOWNVOTE_CAT_SUCCESS = 'DOWNVOTE_CAT_SUCCESS';
export const DOWNVOTE_CAT_ERROR = 'DOWNVOTE_CAT_ERROR';

export const downvoteCatPending = () => {
  return {
    type: DOWNVOTE_CAT_PENDING
  };
};

export const downvoteCatSuccess = (vote, variables) => {
  return {
    type: DOWNVOTE_CAT_SUCCESS,
    payload: { vote, variables }
  };
};

export const downvoteCatError = error => {
  return {
    type: DOWNVOTE_CAT_ERROR,
    error: { ...error?.data }
  };
};
