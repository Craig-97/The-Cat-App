import axios from 'axios';
import { API_BASE } from './constants';

export const apiGET = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  headers
) => {
  dispatch(pendingAction());
  axios
    .get(`${API_BASE}/${url}`, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};

export const apiPOST = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  variables,
  headers
) => {
  dispatch(pendingAction());
  axios
    .post(`${API_BASE}/${url}`, variables, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(res.data, variables));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};

export const apiFormDataPOST = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  formData,
  headers
) => {
  dispatch(pendingAction());
  axios
    .post(`${API_BASE}/${url}`, formData, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};

export const apiDELETE = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  id,
  headers
) => {
  dispatch(pendingAction());
  axios
    .delete(`${API_BASE}/${url}/${id}`, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(id));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};
