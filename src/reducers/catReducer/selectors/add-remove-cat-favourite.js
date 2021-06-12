export const removeCatFavourite = (id, cats) => {
  let updatedCats = [...cats];
  updatedCats?.some(cat => {
    if (cat.favourite_id === id) {
      delete cat.favourite_id;
      return true;
    }
    return false;
  });

  return updatedCats;
};

export const addCatFavourite = (payload, cats) => {
  const { favourite, variables } = payload;
  const { image_id } = variables;
  const { id } = favourite;

  let updatedCats = [...cats];
  updatedCats?.some(cat => {
    if (cat.id === image_id) {
      cat.favourite_id = id;
      return true;
    }
    return false;
  });

  return updatedCats;
};
