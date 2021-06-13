import cloneDeep from 'lodash/cloneDeep';

/* Takes in an array of cats and an image id, if image id is 
found in current list of cats then cat.votes value is reduced by 1 */
export const removeCatVote = (payload, cats) => {
  const { variables } = payload || {};
  const { image_id } = variables || {};

  let updatedCats = cats?.length ? cloneDeep(cats) : [];
  updatedCats?.some(cat => {
    if (cat.id === image_id) {
      if (!cat.votes) {
        cat.votes = -1;
      } else {
        cat.votes = cat.votes - 1;
      }
    }
    return false;
  });

  return updatedCats;
};

/* Takes in an array of cats and an image id, if image id is 
found in current list of cats then cat.votes value is increased by 1 */
export const addCatVote = (payload, cats) => {
  const { variables } = payload || {};
  const { image_id } = variables || {};

  let updatedCats = cats?.length ? cloneDeep(cats) : [];
  updatedCats?.some(cat => {
    if (cat.id === image_id) {
      if (!cat.votes) {
        cat.votes = 1;
      } else {
        cat.votes = cat.votes + 1;
      }
      return true;
    }
    return false;
  });
  return updatedCats;
};
