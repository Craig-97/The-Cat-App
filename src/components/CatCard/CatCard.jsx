import React from 'react';
import {
  Card,
  Typography,
  CardActions,
  CardMedia,
  CardContent
} from '@material-ui/core';
import { FavouriteCat } from './FavouriteCat';
import { VoteCat } from './VoteCat';

export const CatCard = ({ cat }) => {
  const { url, id, favourite_id: favId, votes } = cat || {};

  return (
    <Card data-testid="cat" key={id} className="catlist__cat cat">
      <CardMedia component="img" alt={id} image={url} title={`cat-${id}`} />
      <FavouriteCat id={id} favId={favId} />
      <CardActions className="cat__actions actions">
        <VoteCat id={id} />
      </CardActions>

      <CardContent>
        <Typography
          className="cat__votes"
          gutterBottom
          variant="h5"
          component="h5"
        >
          {`Score: ${votes}`}
        </Typography>
      </CardContent>
    </Card>
  );
};
