export const SHOW_ERROR_ALERT = 'SHOW_ERROR_ALERT';
export const SHOW_SUCCESS_ALERT = 'SHOW_SUCCESS_ALERT';

export const showSuccessAlert = alert => {
  return {
    type: SHOW_SUCCESS_ALERT,
    payload: alert
  };
};

export const showErrorAlert = alert => {
  return {
    type: SHOW_ERROR_ALERT,
    payload: alert
  };
};
