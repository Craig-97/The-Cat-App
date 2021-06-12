import { calculateVotes } from './calculate-votes';

export const getFilteredCats = (cats, favourites, votes) => {
  let filteredCats = [...cats];
  const calculatedVotes = calculateVotes(votes);

  filteredCats?.forEach(cat => {
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

  return filteredCats;
};
