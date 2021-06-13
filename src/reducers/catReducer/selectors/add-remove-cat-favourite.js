import cloneDeep from 'lodash/cloneDeep';

/* Takes in an array of cats and a favourite id, if favourite 
id is found in current list of cats then it is deleted */
export const removeCatFavourite = (id, cats) => {
  let updatedCats = cats?.length ? cloneDeep(cats) : [];
  updatedCats?.some(cat => {
    if (cat.favourite_id === id) {
      delete cat.favourite_id;
      return true;
    }
    return false;
  });

  return updatedCats;
};

/* Takes in an array of cats and an image id, if image id is 
found in current list of cats then a favourite id is added */
export const addCatFavourite = (payload, cats) => {
  const { favourite, variables } = payload || {};
  const { image_id } = variables || {};
  const { id } = favourite || {};

  let updatedCats = cats?.length ? cloneDeep(cats) : [];
  updatedCats?.some(cat => {
    if (cat.id === image_id) {
      cat.favourite_id = id;
      return true;
    }
    return false;
  });

  return updatedCats;
};
