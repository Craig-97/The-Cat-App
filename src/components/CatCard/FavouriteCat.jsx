import React from 'react';
import { showSuccessAlert } from '../../actions';
import { deleteFavourite, setFavourite } from '../../api';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const FavouriteCat = ({ id, favId }) => {
  const isFavourite = Boolean(favId);
  const dispatch = useDispatch();

  const updateFavourite = () => {
    if (!isFavourite) {
      dispatch(setFavourite(id));
      dispatch(showSuccessAlert(`${id} - has been added as a favourite`));
    } else {
      dispatch(deleteFavourite(favId));
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
