import { apiFormDataPOST } from './apiHelper';
import { POST_IMAGE_HEADERS } from './constants';

import { uploadCatPending, uploadCatSuccess, uploadCatError } from '../actions';

export const uploadCat = image => dispatch => {
  let formData = new FormData();
  formData.append('file', image);

  apiFormDataPOST(
    dispatch,
    uploadCatPending,
    uploadCatSuccess,
    uploadCatError,
    'images/upload',
    formData,
    POST_IMAGE_HEADERS
  );
};
