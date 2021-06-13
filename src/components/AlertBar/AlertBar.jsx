import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export const AlertBar = ({ message, severity = 'success' }) => {
  const [open, setOpen] = useState(false);

  /* Open/Closes snackbar when message changes */
  useEffect(() => {
    if (message) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [message]);

  /* Closes snackbar when onClose event is fired */
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      data-testid="alert-bar"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      {message && alert && (
        <Alert onClose={handleClose} severity={severity}>
          {capitalizeFirstLetter(severity)}: {message}
        </Alert>
      )}
    </Snackbar>
  );
};
