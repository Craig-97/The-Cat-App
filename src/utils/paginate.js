/* Takes in an array and based on pageSize and pageNumber will return a sliced up array */
export const paginate = (cats, pageSize, pageNumber) => {
  if (!cats || !pageSize || !pageNumber) {
    return null;
  }

  return cats?.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
