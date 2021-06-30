import reduceReducers from 'reduce-reducers';
import {
  SHOW_SUCCESS_ALERT,
  SHOW_ERROR_ALERT,
  FETCH_CATS_PENDING
} from '../../actions';

const initialState = {
  message: null,
  severity: null
};

export const alertMessagesReducer = (state, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_ALERT:
      return {
        ...state,
        message: action.payload,
        severity: 'success'
      };
    case SHOW_ERROR_ALERT:
      return {
        ...state,
        message: action.payload,
        severity: 'error'
      };
    case FETCH_CATS_PENDING:
      return {
        ...state,
        message: null,
        severity: null
      };
    default:
      return state;
  }
};

export const alertReducer = reduceReducers(initialState, alertMessagesReducer);

export const getAlertMessage = state => state.alert?.message;
export const getAlertSeverity = state => state.alert?.severity;
