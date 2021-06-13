import { apiPOST } from './apiHelper';
import { DEFAULT_HEADERS } from './constants';

import {
  upvoteCatPending,
  upvoteCatSuccess,
  upvoteCatError,
  downvoteCatPending,
  downvoteCatSuccess,
  downvoteCatError
} from '../actions';

/* Request to add a vote to a cat */
export const upvoteCat = id => dispatch => {
  const variables = {
    image_id: id,
    value: 1
  };

  apiPOST(
    dispatch,
    upvoteCatPending,
    upvoteCatSuccess,
    upvoteCatError,
    'votes',
    variables,
    DEFAULT_HEADERS
  );
};

/* Request to remove a vote from a cat */
export const downvoteCat = id => dispatch => {
  const variables = {
    image_id: id,
    value: 0
  };

  apiPOST(
    dispatch,
    downvoteCatPending,
    downvoteCatSuccess,
    downvoteCatError,
    'votes',
    variables,
    DEFAULT_HEADERS
  );
};
