import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const LoadingSpinner = ({ className, text }) => (
  <div data-testid="loading-spinner" className={className}>
    <CircularProgress size={100} />
    <h2>{text}</h2>
  </div>
);
