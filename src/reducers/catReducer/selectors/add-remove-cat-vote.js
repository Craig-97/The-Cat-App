export const removeCatVote = (payload, cats) => {
  const { variables } = payload;
  const { image_id } = variables;

  let updatedCats = [...cats];
  updatedCats?.some(cat => {
    if (cat.id === image_id) {
      cat.votes = cat.votes - 1;
    }
    return false;
  });

  return updatedCats;
};

export const addCatVote = (payload, cats) => {
  const { variables } = payload;
  const { image_id } = variables;

  let updatedCats = [...cats];
  updatedCats?.some(cat => {
    if (cat.id === image_id) {
      cat.votes = cat.votes + 1;
      return true;
    }
    return false;
  });

  return updatedCats;
};
