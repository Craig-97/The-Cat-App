import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import './errorPage.scss';

export const ErrorPage = ({ error }) => {
  const { data, status } = error || {};
  const { message } = data || {};

  return (
    error && (
      <div className="error-page">
        <div className="error-page__status">
          <ErrorOutlineIcon color="secondary" />
          <h1>{status}</h1>
        </div>
        <h2>Error: {message}</h2>
      </div>
    )
  );
};
