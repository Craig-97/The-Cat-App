import { calculateVotes } from './calculate-votes';
import cloneDeep from 'lodash/cloneDeep';

export const getFormattedCats = (cats, favourites, votes) => {
  let formattedCats = cats?.length ? cloneDeep(cats) : [];
  const calculatedVotes = calculateVotes(votes);

  formattedCats?.forEach(cat => {
    cat.votes = 0;

    favourites?.forEach(favourite => {
      if (cat.id === favourite.image_id) {
        cat.favourite_id = favourite.id;
      }
    });

    calculatedVotes?.forEach(vote => {
      if (cat.id === vote.image_id) {
        cat.votes = vote.value;
      }
    });
  });

  return formattedCats;
};
