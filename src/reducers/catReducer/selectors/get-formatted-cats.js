import { calculateVotes } from './calculate-votes';
import cloneDeep from 'lodash/cloneDeep';

/* Adds favourite and vote data to the cats array */
export const getFormattedCats = (cats, favourites, votes) => {
  let formattedCats = cats?.length ? cloneDeep(cats) : [];
  const calculatedVotes = calculateVotes(votes);

  formattedCats?.forEach(cat => {
    cat.votes = 0;

    // If favourite image id matches cat id then add favourite id
    favourites?.forEach(favourite => {
      if (cat.id === favourite.image_id) {
        cat.favourite_id = favourite.id;
      }
    });

    // If vote image id matches cat id then add vote count
    calculatedVotes?.forEach(vote => {
      if (cat.id === vote.image_id) {
        cat.votes = vote.value;
      }
    });
  });

  return formattedCats;
};
