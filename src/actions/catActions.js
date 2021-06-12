//GET CATS
export const FETCH_CATS_PENDING = 'FETCH_CATS_PENDING';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_ERROR = 'FETCH_CATS_ERROR';

export const fetchCatsPending = () => {
  return {
    type: FETCH_CATS_PENDING
  };
};

export const fetchCatsSuccess = data => {
  return {
    type: FETCH_CATS_SUCCESS,
    payload: data
  };
};

export const fetchCatsError = error => {
  return {
    type: FETCH_CATS_ERROR,
    error: error
  };
};

//POST CAT
export const UPLOAD_CAT_PENDING = 'UPLOAD_CAT_PENDING';
export const UPLOAD_CAT_SUCCESS = 'UPLOAD_CAT_SUCCESS';
export const UPLOAD_CAT_ERROR = 'UPLOAD_CAT_ERROR';

export const uploadCatPending = () => {
  return {
    type: UPLOAD_CAT_PENDING
  };
};

export const uploadCatSuccess = cat => {
  return {
    type: UPLOAD_CAT_SUCCESS,
    payload: cat
  };
};

export const uploadCatError = error => {
  return {
    type: UPLOAD_CAT_ERROR,
    error: { ...error?.data }
  };
};
