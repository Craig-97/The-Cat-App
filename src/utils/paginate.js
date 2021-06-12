export const paginate = (cats, pageSize, pageNumber) => {
  return cats.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
