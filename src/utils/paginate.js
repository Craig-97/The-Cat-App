export const paginate = (cats, pageSize, pageNumber) => {
  if (!cats || !pageSize || !pageNumber) {
    return null;
  }

  return cats?.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
