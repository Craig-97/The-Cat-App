import cloneDeep from 'lodash/cloneDeep';

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
