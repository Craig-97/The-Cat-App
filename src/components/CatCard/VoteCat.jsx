import React from 'react';
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch } from 'react-redux';
import { upvoteCat, downvoteCat } from '../../api';
import { showSuccessAlert } from '../../actions';

export const VoteCat = ({ id }) => {
  const dispatch = useDispatch();

  const upvote = () =>
    dispatch(
      // sends upvote POST request
      upvoteCat(id),
      // updates alert state so snackbar alert for upvote is displayed
      dispatch(showSuccessAlert(`${id} - has been upvoted`))
    );

  const downvote = () =>
    dispatch(
      // sends downvote POST request
      downvoteCat(id),
      // updates alert state so snackbar alert for downvote is displayed
      dispatch(showSuccessAlert(`${id} - has been downvoted`))
    );

  return (
    <div className="actions__voting">
      <Button
        className="actions__upvote"
        color="primary"
        variant="contained"
        startIcon={<ThumbUpIcon />}
        onClick={upvote}
      >
        Upvote
      </Button>

      <Button
        className="actions__downvote"
        variant="contained"
        color="primary"
        startIcon={<ThumbDownIcon />}
        onClick={downvote}
      >
        Downvote
      </Button>
    </div>
  );
};
