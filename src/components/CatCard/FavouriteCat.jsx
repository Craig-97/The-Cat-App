import React from 'react';
import { showSuccessAlert } from '../../actions';
import { deleteFavourite, setFavourite } from '../../api';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const FavouriteCat = ({ id, favId }) => {
  const isFavourite = Boolean(favId);
  const dispatch = useDispatch();

  /* Sends favourite or unfavourite request depending on current status */
  const updateFavourite = () => {
    if (!isFavourite) {
      // sends favourite POST request
      dispatch(setFavourite(id));
      // updates alert state so snackbar alert for added favourite is displayed
      dispatch(showSuccessAlert(`${id} - has been added as a favourite`));
    } else {
      // sends favourite DELETE request
      dispatch(deleteFavourite(favId));
      // updates alert state so snackbar alert for favourite removal is displayed
      dispatch(showSuccessAlert(`${id} - has been removed as a favourite`));
    }
  };

  return (
    <IconButton aria-label="favorite" onClick={updateFavourite}>
      {isFavourite ? (
        <FavoriteIcon className="cat__favourite" fontSize="large" />
      ) : (
        <FavoriteIcon className="cat__unfavourite" fontSize="large" />
      )}
    </IconButton>
  );
};
